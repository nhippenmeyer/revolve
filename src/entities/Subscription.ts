import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Subscription extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;
}

export default Subscription;
