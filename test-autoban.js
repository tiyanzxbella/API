// Using native fetch

const URL = 'http://localhost:4000/api/anime/home'; // Ganti jika port berbeda
const TOTAL_REQUESTS = 2100; // Melebihi threshold 2000
const CONCURRENCY = 50;

async function flood() {
    console.log(`Starting DDoS simulation: Sending ${TOTAL_REQUESTS} requests...`);
    let completed = 0;
    let banned = false;

    const sendBatch = async (size) => {
        const promises = Array.from({ length: size }).map(async (_, i) => {
            if (banned) return;
            try {
                const res = await fetch(URL, { headers: { 'User-Agent': 'DDoS-Test-Bot' } });
                completed++;
                
                if (res.status === 403) {
                    const data = await res.json();
                    if (data.message.includes('automatically banned')) {
                        console.log(`\n[!] BANNED at request #${completed}: ${data.message}`);
                        banned = true;
                    }
                }

                if (completed % 100 === 0) {
                    process.stdout.write(`\rProgress: ${completed}/${TOTAL_REQUESTS} requests sent...`);
                }
            } catch (e) {
                // Silently ignore network errors during flood
            }
        });
        await Promise.all(promises);
    };

    for (let i = 0; i < Math.ceil(TOTAL_REQUESTS / CONCURRENCY); i++) {
        if (banned) break;
        await sendBatch(CONCURRENCY);
    }

    if (banned) {
        console.log('\n[SUCCESS] Auto-ban logic verified. IP is blocked.');
    } else {
        console.log('\n[FAILURE] Auto-ban logic did not trigger. Check configuration.');
    }
}

flood();
