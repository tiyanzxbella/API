export const apiKeys = [
  {
    name: 'Administrator',
    key: 'a8d9f1c2b3e4a5c6',
    limit: 0,
    windowMs: 10 * 60 * 1000
  }
]

export const guestConfig = {
  limit: 100,
  windowMs: 10 * 60 * 1000
}

export const autoBanConfig = {
  enabled: true,
  threshold: 2000,
  windowMs: 5 * 60 * 1000, // Monitor window
  banDuration: 5 * 60 * 1000 // Ban duration
}

export const banList = [] // Will store { ip, expires }
