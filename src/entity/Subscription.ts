import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { StateValue } from 'xstate';
import service from '../subscription/service';

@Entity()
class Subscription extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  public constructor() {
    super();

    service.start();
  }

  public activate(): void {
    service.send('ACTIVATE');
  }

  public state(): StateValue {
    return service.state.value;
  }
}

export default Subscription;
