import { IsEnum, IsJSON, IsNumber, IsOptional, IsPositive, IsString, MinLength} from "class-validator";
import {Status} from "../../enums/status.enum";

export class CreateIdeaDto {
    @IsString()
    @MinLength(5)
    title: string;

    @IsString()
    @MinLength(50)
    short_description: string;

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
