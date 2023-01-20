import { BaseRepository } from '@src/application/repositories/base-repository';
import { BaseService } from '../base-service';

export class BaseServiceImp<
  T,
  ID,
  R extends BaseRepository<T, ID>,
> extends BaseService<T, ID, R> {
  protected repository: R;

  constructor(repository: R) {
    super();
    this.repository = repository;
  }

  async create(entity: T): Promise<void> {
    await this.repository.create(entity);
  }
  async findById(id: ID): Promise<T | null> {
    return await this.repository.findById(id);
  }
  async save(entity: T): Promise<void> {
    await this.repository.save(entity);
  }
}
