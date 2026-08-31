import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
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