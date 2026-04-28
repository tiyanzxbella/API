import { statsRoute, statsHandler } from './stats/index.js'
import { keyStatusRoute, keyStatusHandler } from './auth/index.js'
import { saveScalarConfig } from '../configs/app.js'

export const setupRoutes = (app) => {
    app.openapi(statsRoute, statsHandler)
    app.openapi(keyStatusRoute, keyStatusHandler)

    app.post('/api/admin/config', async (c) => {
        const host = c.req.header('host') || ''
        const isLocal = host.includes('localhost') || host.includes('127.0.0.1')
        const apiKey = c.req.header('x-api-key')
        
        if (!isLocal && apiKey !== 'a8d9f1c2b3e4a5c6') {
            return c.json({ success: false, message: 'Unauthorized' }, 401)
        }
        
        const newConfig = await c.req.json()
        const success = saveScalarConfig(newConfig)
        return c.json({ success })
    })
}
