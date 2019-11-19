import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { List } from "./list.entity";

@Entity()
export class Item {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({type: 'text'})
    description: string;

    @ManyToOne(type => List, list => list.item)
    @JoinColumn({
        name: 'list'
    })
    list: List;

    @Column({type: 'tinyint'})
    isChecked: boolean
}