import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateOfferDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  companyName: string;

  @IsString()
  @IsNotEmpty()
  companyLinkedinUrl: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsString({
    each: true,
  })
  jobLevel: string[];

  @IsString()
  @IsNotEmpty()
  companyLocation: string;

  @IsBoolean()
  @IsNotEmpty()
  acceptingJob: boolean;
}
