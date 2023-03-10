import { IsString } from 'class-validator';

export class RefreshTokenDto {
  @IsString({ message: 'refresh token is required' })
  public refreshToken!: string;
}
