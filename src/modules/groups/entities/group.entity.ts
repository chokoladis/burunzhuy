import {Column, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../../users/entities/user.entity";

export class Group {
    @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
    id: number;

    @Column({ type: 'varchar', length: 50 })
    name: string;
    @Column({ type: 'varchar', length: 50 })
    code: string;

    @OneToMany(() => User, (user) => user.group_id)
    users: User[]

    // todo permissions ?
}
