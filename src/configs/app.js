import { z } from '@hono/zod-openapi'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export const appConfig = {
    port: process.env.PORT || 4000,
    title: 'MiuuAPI Portal',
    description: 'A simple and easy to use API. ⭐️ Star to support our work!',
    version: '1.0.0',
    contact: {
        name: 'Miuu Support',
        url: 'https://github.com/miuubyte',
        email: 'miuudev@gmail.com'
    }
}

/**
 * Configuration for the Scalar Documentation UI
 * Loaded dynamically from scalar.json
 */
export const getScalarConfig = () => {
    try {
        const configPath = path.join(__dirname, 'scalar.json')
        if (fs.existsSync(configPath)) {
            const data = fs.readFileSync(configPath, 'utf8')
            const config = JSON.parse(data)
            console.log(`[Config] Loaded scalar.json (Layout: ${config.layout}, Theme: ${config.theme})`)
            return config
        } else {
            console.warn(`[Config] scalar.json not found at ${configPath}`)
        }
    } catch (e) {
        console.error(`[Config] Error loading scalar.json: ${e.message}`)
    }
    return {
        theme: 'none',
        layout: 'modern',
        authentication: { preferredSecurityScheme: 'ApiKeyAuth' }
    }
}

export const openApiConfig = {
    openapi: '3.1.0',
    info: {
        version: appConfig.version,
        title: appConfig.title,
        description: appConfig.description,
        contact: appConfig.contact
    },
    servers: [],
    tags: [
        { name: 'server', description: 'Server health and statistics' },
        { name: 'auth', description: 'API Key management and authentication' }
    ]
}

export const ErrorSchema = z.object({
    success: z.boolean(),
    status: z.number(),
    error: z.string(),
    message: z.string()
})

export const UnauthorizedSchema = z.object({
    success: z.boolean(),
    status: z.number(),
    error: z.string(),
    message: z.string()
})

export const ForbiddenSchema = z.object({
    success: z.boolean(),
    status: z.number(),
    error: z.string(),
    message: z.string()
})

export const RateLimitSchema = z.object({
    success: z.boolean(),
    status: z.number(),
    error: z.string(),
    message: z.string(),
    retryAfter: z.number(),
    limit_info: z.object({
        type: z.string(),
        max: z.number()
    })
})
