import { IsString, MinLength, MaxLength, IsEmail } from 'class-validator';

export class SignUpDto {
  @IsString({ message: 'name is required' })
  @MinLength(3, { message: 'Min length is 3' })
  @MaxLength(124, { message: 'Max lenght is 124' })
  public name!: string;

  @IsEmail({}, { message: 'email is invalid' })
  public email!: string;

  @IsString({ message: 'password is required' })
  @MinLength(8, { message: 'Min length is 3' })
  @MaxLength(124, { message: 'Max lenght is 124' })
  public password!: string;
}
