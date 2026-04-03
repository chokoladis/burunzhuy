import {Status} from "../../enums/status.enum";
import {
    Column, CreateDateColumn, JoinColumn, ManyToOne, PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Group} from "../../groups/entities/group.entity";

export class User {

    @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
    id: number;

    @Column({ type: 'varchar', nullable: false, length: 50 })
    name: string;

    @Column({ type: 'varchar', nullable: true, length: 150 })
    second_name: null | string;

    @Column({ type: 'varchar', nullable: false, length: 150 })
    email: string;

    @Column({ type: 'bigint', nullable: false, unsigned: true, length: 11 })
    phone: number;

    @Column({ type: 'jsonb', nullable: true })
    picture: null | string;

    @Column({ type: 'text', nullable: true })
    description: null | string;

    @Column({ type: 'bigint', unsigned: true, })
    group_id: number;

    @ManyToOne(() => Group, (group) => group.users, { onDelete: "CASCADE" })
    @JoinColumn({ name: 'group_id' })

    @Column({ type: 'enum', enum: Status, default: Status.Active })
    status: Status;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
