import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from '../dto/create-user.dto';

export class User extends CreateUserDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  createdDate: Date;

  @ApiProperty()
  createdBy?: User;

  @ApiProperty()
  modifiedDate?: Date;

  @ApiProperty()
  modifiedBy?: User;
}
