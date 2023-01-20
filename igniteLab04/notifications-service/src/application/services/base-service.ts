export abstract class BaseService<T, ID, R> {
  protected repository: R;
  abstract create(entity: T): Promise<void>;
  abstract findById(id: ID): Promise<T | null>;
  abstract save(entity: T): Promise<void>;
}
