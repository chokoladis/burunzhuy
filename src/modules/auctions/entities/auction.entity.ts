import {Status} from "../../enums/status.enum";
import {Column, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Idea} from "../../ideas/entities/idea.entity";
import {User} from "../../users/entities/user.entity";

export class Auction {
    @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
    id: number;

    @Column({ type: 'bigint', unsigned: true })
    idea_id: number;

    @Column({ type: 'bigint', unsigned: true })
    buyer_id: number;

    @Column({ type: 'enum', enum: Status, default: Status.Active })
    status: Status;

    @Column({ type: 'datetime', default: Date.now })
    created_at: Date;
    @Column({ type: 'datetime' })
    ended_at: Date;

    @OneToOne(()=> Idea, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'idea_id' })
    idea: Idea;

    @ManyToOne(()=> User, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'buyer_id' })
    buyer: User;
}