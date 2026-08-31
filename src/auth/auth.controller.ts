import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('organizationId') organizationId: string,
  ) {
    return this.authService.login(email, password, organizationId);
  }
}