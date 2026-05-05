import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../users/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly usersService: UsersService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET') || 'super-secret-key', // Use env var in prod
    });
  }

  async validate(payload: any) {
    console.log('JWT Payload:', payload);
    const user = await this.usersService.findById(payload.sub);
    
    if (!user) {
      console.log('User not found for ID:', payload.sub);
      throw new UnauthorizedException();
    }

    if (!user.isActive) {
      console.log('User is inactive:', user.email);
      throw new UnauthorizedException();
    }

    return { userId: payload.sub, email: payload.email, tenantId: payload.tenantId, role: payload.role };
  }
}
