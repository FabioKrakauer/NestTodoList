import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from 'typeorm';
import { Item } from './item.entity';

@Entity()
export class List {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({type: 'text'})
    description: string

    @OneToMany(type => Item, item => item.list)
    item: Item[];
    
}