//id, descripcion, color, imagen

import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50})
    descripcion: string;

    @Column({ length: 50 })
    color: string;

    @Column({ length: 255 })
    imagen: string;
}
