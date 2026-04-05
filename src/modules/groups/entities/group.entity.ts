import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../../users/entities/user.entity";

@Entity()
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
