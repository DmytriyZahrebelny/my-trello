import { IsString } from 'class-validator';

export class DeleteWorkspaceDto {
  @IsString()
  public id!: string;
}
