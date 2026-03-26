import {Status} from "../../enums/status.enum";

export class Auction {
    id: number;
    idea_id: number;
    buyer_id: number;
    status: Status;
    created_at: Date;
    ended_at: Date;
}