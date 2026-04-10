import { IsJSON, IsNumber, IsOptional, IsPositive, IsString, MinLength} from "class-validator";

export class CreateIdeaDto {
    @IsString()
    @MinLength(5)
    title: string;

    @IsString()
    @MinLength(50)
    short_description: string;

    @IsOptional() //remove later
    @IsJSON()
    preview: string;

    @IsString()
    @MinLength(100)
    full_description: string;

    @IsOptional()
    @IsJSON()
    files: string[] | null;

    @IsNumber()
    @IsPositive()
    enter_cost: number | null;

    @IsNumber()
    @IsPositive()
    full_price: number | null;
}
