import { Entity, PrimaryGeneratedColumn, OneToMany, BaseEntity } from 'typeorm';
import { SomeEntity } from './someentity';

@Entity()
export class ThirdEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @OneToMany(() => SomeEntity, (se: SomeEntity) => se.otherEntity)
  someEntities: SomeEntity[];
};
