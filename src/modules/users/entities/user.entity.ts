import {Status} from "../../enums/status.enum";
import {
    Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Group} from "../../groups/entities/group.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
    id: number;

    @Column({ type: 'varchar', nullable: false, length: 50 })
    name: string;

    @Column({ type: 'varchar', nullable: true, length: 150 })
    second_name: string | null;

    @Column({ type: 'varchar', nullable: false, length: 150 })
    email: string;

    @Column({ type: 'varchar', nullable: false, unsigned: true, length: 11 })
    phone: number;

    @Column({ type: 'jsonb', nullable: true })
    picture: string | null;

    @Column({ type: 'text', nullable: true })
    description: string | null;

    @Column({ type: 'bigint', unsigned: true, })
    group_id: number;

    @ManyToOne(() => Group, (group) => group.users, { onDelete: "CASCADE" })
    @JoinColumn({ name: 'group_id' })

    @Column({ type: 'enum', enum: Status, default: Status.NoActive })
    status: Status;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
