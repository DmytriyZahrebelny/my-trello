import { IsString } from 'class-validator';

export class BoardDto {
  @IsString({ message: 'id is required' })
  id!: string;
}
