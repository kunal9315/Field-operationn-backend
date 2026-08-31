import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getRoot() {
    return {
      service: 'FieldOps API',
      status: 'online',
      version: '1.0.0',
      apiPrefix: '/api/v1',
      timestamp: new Date().toISOString(),
    };
  }

  @Get('health')
  getHealth() {
    return {
      success: true,
      status: 'ok',
      service: 'fieldops-api',
      timestamp: new Date().toISOString(),
    };
  }
}