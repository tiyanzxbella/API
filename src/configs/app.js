import { z } from '@hono/zod-openapi'

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

export const scalarConfig = {
    theme: 'none',
    layout: 'modern',
    hideClientButton: false,
    showSidebar: true,
    showDeveloperTools: true,
    showToolbar: true,
    operationTitleSource: 'summary',
    persistAuth: false,
    telemetry: true,
    externalUrls: {
        dashboardUrl: 'https://dashboard.scalar.com',
        registryUrl: 'https://registry.scalar.com',
        proxyUrl: 'https://proxy.scalar.com',
        apiBaseUrl: 'https://api.scalar.com'
    },
    isEditable: false,
    isLoading: false,
    hideModels: false,
    documentDownloadType: 'both',
    hideTestRequestButton: false,
    hideSearch: false,
    showOperationId: false,
    hideDarkModeToggle: false,
    withDefaultFonts: true,
    defaultOpenFirstTag: true,
    defaultOpenAllTags: false,
    expandAllModelSections: false,
    expandAllResponses: false,
    orderSchemaPropertiesBy: 'alpha',
    orderRequiredPropertiesFirst: true,
    authentication: {
        preferredSecurityScheme: 'ApiKeyAuth'
    },
    customBranding: {
        footer: {
            text: 'Powered by miuubyte',
            url: 'https://github.com/miuubyte'
        },
        clientButton: {
            text: 'Discord',
            url: 'https://discord.gg/Gj8CUjCtav',
            icon: 'discord'
        }
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
