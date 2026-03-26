import {Status} from "../../enums/status.enum";

export class User {
    id: number;
    name: string;
    second_name: null | string;
    email: string;
    phone: number;
    picture: null | string; // json ?
    description: null | string;

    group_id: number;

    status: Status;
    createdAt: Date;
    updatedAt: Date;
}
