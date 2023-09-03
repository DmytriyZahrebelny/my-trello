import { IsString } from 'class-validator';

export class DeleteColumnDto {
  @IsString({ message: 'id is required' })
  id!: string;
}
