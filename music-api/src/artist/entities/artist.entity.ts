import { IsNumber, IsString, Length } from 'class-validator';

export class Artist {
  @IsString()
  @Length(3, 30)
  firstName: string;

  @IsString()
  @Length(3, 30)
  lastName: string;

  @IsString()
  stageName: string;

  @IsNumber()
  age: number;
}
