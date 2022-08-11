import { Controller, Request, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/passport/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/passport/jwt-auth.guard';
import { RolesGuard } from './auth/roles/roles.guard';
import { Role } from './auth/roles/enums/role.enum';
import { Roles } from './auth/roles/roles.decorator';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @UseGuards(RolesGuard)
  @Roles(Role.Admin, Role.User)
  @Get('test')
  async getData(@Request() req) {
    return 'OK';
  }
}
