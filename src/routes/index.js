import { statsRoute, statsHandler } from './stats/index.js'
import { keyStatusRoute, keyStatusHandler } from './auth/index.js'
import { adminRouter } from './admin.js'

export const setupRoutes = (app) => {
    app.openapi(statsRoute, statsHandler)
    app.openapi(keyStatusRoute, keyStatusHandler)
    app.route('/api/admin', adminRouter)
}
