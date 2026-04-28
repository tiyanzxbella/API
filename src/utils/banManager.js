import fs from 'node:fs'
import path from 'node:path'
import cluster from 'node:cluster'
import logger from './logger.js'

const bansPath = path.resolve('src/configs/bans.json')

class BanManager {
    constructor() {
        this.autoBanList = []
        this.manualBans = []
        this.loadBans()
    }

    loadBans() {
        try {
            if (fs.existsSync(bansPath)) {
                const data = JSON.parse(fs.readFileSync(bansPath, 'utf8'))
                this.autoBanList = data.autoBanList || []
                this.manualBans = data.manualBans || []
            }
        } catch (e) {
            logger.error(`Failed to load bans.json: ${e.message}`)
        }
    }

    saveBans() {
        if (cluster.isWorker) return // Workers should not write to file

        try {
            fs.writeFileSync(bansPath, JSON.stringify({
                autoBanList: this.autoBanList,
                manualBans: this.manualBans
            }, null, 4), 'utf8')
        } catch (e) {
            logger.error(`Failed to save bans.json: ${e.message}`)
        }
    }

    banIP(ip, reason, durationMs) {
        const expires = Date.now() + durationMs
        if (!this.autoBanList.find(b => b.ip === ip)) {
            const banData = { ip, reason, expires }
            this.autoBanList.push(banData)
            
            if (cluster.isPrimary) {
                this.saveBans()
                this.broadcast()
            } else {
                process.send({ type: 'BAN_IP', data: banData })
            }
        }
    }

    cleanup() {
        if (!cluster.isPrimary) return

        const now = Date.now()
        let changed = false
        for (let i = this.autoBanList.length - 1; i >= 0; i--) {
            if (now > this.autoBanList[i].expires) {
                this.autoBanList.splice(i, 1)
                changed = true
            }
        }

        if (changed) {
            this.saveBans()
            this.broadcast()
        }
    }

    broadcast() {
        if (!cluster.isPrimary || !cluster.workers) return
        Object.values(cluster.workers).forEach(w => {
            if (w) w.send({ 
                type: 'BAN_LIST_SYNC', 
                data: { autoBanList: this.autoBanList, manualBans: this.manualBans } 
            })
        })
    }

    syncFromMaster(data) {
        this.autoBanList = data.autoBanList || []
        this.manualBans = data.manualBans || []
    }
}

export const banManager = new BanManager()
