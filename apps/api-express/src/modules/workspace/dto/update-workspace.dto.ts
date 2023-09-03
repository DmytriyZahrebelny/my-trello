import { IsString, MinLength, MaxLength } from 'class-validator';

export class UpdateWorkspaceDto {
  @IsString({ message: 'workSpaceId is required' })
  public id!: string;

  @IsString({ message: 'Workspace name is required' })
  @MinLength(3, { message: 'Min length is 3' })
  @MaxLength(124, { message: 'Max lenght is 124' })
  public name!: string;
}
