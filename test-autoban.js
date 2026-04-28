// Using native fetch from Node.js v20+

const URL = 'http://localhost:4000/api/anime/home';
const TOTAL_REQUESTS = 2100;
const CONCURRENCY = 50;

async function flood() {
    console.log(`[DDoS Simulation] Sending ${TOTAL_REQUESTS} requests to verify Auto-Ban...`);
    let completed = 0;
    let banned = false;

    const sendBatch = async (size) => {
        const promises = Array.from({ length: size }).map(async () => {
            if (banned) return;
            try {
                const res = await fetch(URL, { headers: { 'User-Agent': 'DDoS-Test-Bot' } });
                completed++;
                
                if (res.status === 403) {
                    const data = await res.json();
                    if (data.message && data.message.includes('blokir otomatis')) {
                        console.log(`\n[!] BANNED at request #${completed}: ${data.message}`);
                        banned = true;
                    }
                }

                if (completed % 100 === 0) {
                    process.stdout.write(`\rProgress: ${completed}/${TOTAL_REQUESTS} requests...`);
                }
            } catch (e) {}
        });
        await Promise.all(promises);
    };

    for (let i = 0; i < Math.ceil(TOTAL_REQUESTS / CONCURRENCY); i++) {
        if (banned) break;
        await sendBatch(CONCURRENCY);
    }

    if (banned) {
        console.log('\n[SUCCESS] Auto-ban logic is WORKING 100%. IP is blocked.');
    } else {
        console.log('\n[FAILURE] Auto-ban logic did not trigger. Check threshold settings.');
    }
}

flood();
