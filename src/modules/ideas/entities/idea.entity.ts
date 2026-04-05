import {Status} from "../../enums/status.enum";
import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../../users/entities/user.entity";

@Entity()
export class Idea {
    @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
    id: number;

    @Column({ type: 'bigint', unsigned: true })
    seller_id: number;

    @Column({ type: 'varchar', length: 70 })
    title: string;

    @Column({ type: 'varchar' })
    short_description: string;

    @Column({ type: 'jsonb' })
    preview: string;

    @Column({ type: 'enum', enum: Status, default: Status.Active })
    status: Status;

    @Column({ type: 'text' })
    full_description: string;

    @Column({ type: 'jsonb' })
    files: string[] | null;

    @Column({ type: 'numeric', nullable: true, unsigned: true })
    enter_cost: number | null;

    @Column({ type: 'numeric', nullable: true, unsigned: true })
    full_price: number | null;

    @ManyToOne(()=> User, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'seller_id' })
    seller: User;
}
