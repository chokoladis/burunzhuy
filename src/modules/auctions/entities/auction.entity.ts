import {Status} from "../../enums/status.enum";
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Idea} from "../../ideas/entities/idea.entity";
import {User} from "../../users/entities/user.entity";

@Entity()
export class Auction {
    @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
    id: number;

    @Column({ type: 'bigint', unsigned: true })
    idea_id: number;

    @Column({ type: 'bigint', unsigned: true })
    buyer_id: number;

    @Column({ type: 'enum', enum: Status, default: Status.Active })
    status: Status;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    ended_at: Date;

    @OneToOne(()=> Idea, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'idea_id' })
    idea: Idea;

    @ManyToOne(()=> User, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'buyer_id' })
    buyer: User;
}