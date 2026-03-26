import {Status} from "../../enums/status.enum";

export class Idea {
    id: number;
    title: string;
    short_description: string;
    preview: string;

    status: Status;

    full_description: string;
    files: string[] | null;

    enter_cost: number | null;
    full_price: number | null;
}
