import { OpenAPIHono, createRoute, z } from '@hono/zod-openapi'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { UnauthorizedSchema, ErrorSchema } from '../configs/app.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const CONFIG_PATH = path.join(__dirname, '../configs/scalar.json')

export const adminRouter = new OpenAPIHono()

const ConfigSchema = z.object({
    theme: z.string(),
    layout: z.string(),
    hideClientButton: z.boolean().optional(),
    showSidebar: z.boolean().optional(),
    showDeveloperTools: z.boolean().optional(),
    showToolbar: z.boolean().optional(),
    operationTitleSource: z.string().optional(),
    persistAuth: z.boolean().optional(),
    telemetry: z.boolean().optional(),
    isEditable: z.boolean().optional(),
    isLoading: z.boolean().optional(),
    hideModels: z.boolean().optional(),
    documentDownloadType: z.string().optional(),
    hideTestRequestButton: z.boolean().optional(),
    hideSearch: z.boolean().optional(),
    showOperationId: z.boolean().optional(),
    hideDarkModeToggle: z.boolean().optional(),
    withDefaultFonts: z.boolean().optional(),
    defaultOpenFirstTag: z.boolean().optional(),
    defaultOpenAllTags: z.boolean().optional(),
    expandAllModelSections: z.boolean().optional(),
    expandAllResponses: z.boolean().optional(),
    orderSchemaPropertiesBy: z.string().optional(),
    orderRequiredPropertiesFirst: z.boolean().optional(),
    authentication: z.object({
        preferredSecurityScheme: z.string()
    }).optional(),
    customBranding: z.object({
        footer: z.object({
            text: z.string(),
            url: z.string()
        }),
        clientButton: z.object({
            text: z.string(),
            url: z.string(),
            icon: z.string()
        })
    }).optional()
})

adminRouter.openapi(
    createRoute({
        method: 'get',
        path: '/config',
        summary: 'Get Scalar configuration',
        tags: ['admin'],
        responses: {
            200: {
                content: { 'application/json': { schema: ConfigSchema } },
                description: 'Current configuration'
            }
        }
    }),
    (c) => {
        try {
            if (fs.existsSync(CONFIG_PATH)) {
                const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'))
                return c.json(config)
            }
        } catch (e) {}
        return c.json({}, 404)
    }
)

adminRouter.openapi(
    createRoute({
        method: 'post',
        path: '/config',
        summary: 'Update Scalar configuration',
        tags: ['admin'],
        request: {
            body: {
                content: { 'application/json': { schema: ConfigSchema } }
            }
        },
        responses: {
            200: {
                content: { 'application/json': { schema: z.object({ success: z.boolean(), message: z.string() }) } },
                description: 'Configuration updated'
            },
            401: {
                content: { 'application/json': { schema: UnauthorizedSchema } },
                description: 'Unauthorized'
            }
        }
    }),
    async (c) => {
        const apiKey = c.req.header('x-api-key')
        // Simple protection: only allow admin key
        if (apiKey !== 'a8d9f1c2b3e4a5c6') {
            return c.json({ success: false, status: 401, error: 'Unauthorized', message: 'Admin key required' }, 401)
        }

        const newConfig = await c.req.json()
        try {
            fs.writeFileSync(CONFIG_PATH, JSON.stringify(newConfig, null, 2))
            return c.json({ success: true, message: 'Configuration saved successfully' })
        } catch (e) {
            return c.json({ success: false, status: 500, error: 'Internal Error', message: e.message }, 500)
        }
    }
)
