"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: (origin, callback) => {
            if (!origin) {
                return callback(null, true);
            }
            const configuredOrigins = process.env.CLIENT_URL
                ? process.env.CLIENT_URL.split(',').map((url) => url.trim().replace(/\/$/, ''))
                : ['http://localhost:3000', 'http://localhost:3001'];
            const isLocalhost = /^http:\/\/localhost(:\d+)?$/.test(origin) ||
                /^http:\/\/127\.0\.0\.1(:\d+)?$/.test(origin);
            const isConfigured = configuredOrigins.some((allowed) => origin === allowed || origin.includes(allowed) || allowed.includes(origin));
            const isVercel = origin.endsWith('.vercel.app');
            if (isLocalhost || isConfigured || isVercel) {
                return callback(null, true);
            }
            return callback(null, true);
        },
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'],
        allowedHeaders: [
            'Origin',
            'X-Requested-With',
            'Content-Type',
            'Accept',
            'Authorization',
        ],
    });
    app.setGlobalPrefix('api/v1', {
        exclude: ['/', 'health'],
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
    }));
    const port = process.env.PORT || 4000;
    await app.listen(port, '0.0.0.0');
    console.log(`API running on port ${port} (prefix: /api/v1)`);
}
bootstrap();
//# sourceMappingURL=main.js.map