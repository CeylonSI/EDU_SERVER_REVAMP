import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsEmail,
  IsString,
  Min,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

// @ApiPropertyOptional({ example: 'Cavendish bananas', description: 'Optional description of the item' })
export class CreateUserDto {
  @ApiProperty({ example: 'John' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'johnsmith@gmail.com' })
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({ example: '#password' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
