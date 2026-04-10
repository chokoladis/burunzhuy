import {
    IsEmail,
    IsNotEmpty,
    IsOptional,
    IsString,
    Length,
    Matches, MinLength,
} from "class-validator";

export class CreateUserDto
{
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    name: string;

    @IsOptional()
    @IsString()
    second_name: string | null;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @Length(4, 15)
    @Matches(/^\d{4,15}$/)
    phone: string;

    // photo: Express.Multer.File | null;

    @IsOptional()
    @IsString()
    description: string | null;
}
