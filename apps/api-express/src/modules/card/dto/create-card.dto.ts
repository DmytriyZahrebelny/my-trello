import { IsString, MinLength, MaxLength } from 'class-validator';

export class CreateCardDto {
  @IsString({ message: 'name is required' })
  @MinLength(3, { message: 'Min length is 3' })
  @MaxLength(124, { message: 'Max lenght is 124' })
  public name!: string;

  @IsString({ message: 'columnId is required' })
  columnId!: string;
}
