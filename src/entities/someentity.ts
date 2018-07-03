import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, BaseEntity, RelationId } from 'typeorm';
import { SomeOtherEntity } from './someotherentity';
import { ThirdEntity } from './thirdentity';

@Entity()
export class SomeEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @ManyToOne(() => SomeOtherEntity, (soe: SomeOtherEntity) => soe.someEntities)
  otherEntity: SomeOtherEntity;

  @RelationId((se: SomeEntity) => se.otherEntity)
  otherEntityId: number;

  @ManyToOne(() => ThirdEntity)
  @JoinColumn()
  thirdEntity: ThirdEntity;

  @RelationId((se: SomeEntity) => se.thirdEntity)
  thirdEntityId: number;
};
