export abstract class BaseRepository<T, ID> {
  abstract create(entity: T): Promise<void>;
  abstract findById(id: ID): Promise<T | null>;
  abstract save(entity: T): Promise<void>;
}
