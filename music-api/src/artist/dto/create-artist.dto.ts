import { IsNumber, IsString, Length, Max, Min } from 'class-validator';

export class CreateArtistDto {
  @IsString()
  @Length(3, 30)
  firstName: string;

  @IsString()
  @Length(3, 30)
  lastName: string;

  @IsString()
  @Length(3, 30)
  stageName: string;

  @IsNumber()
  @Min(18)
  @Max(100)
  age: number;
}
