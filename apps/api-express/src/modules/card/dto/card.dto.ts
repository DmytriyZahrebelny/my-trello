import { IsString } from 'class-validator';

export class CardDto {
  @IsString({ message: 'cardId is required' })
  id!: string;
}
