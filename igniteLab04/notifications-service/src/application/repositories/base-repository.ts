export abstract class BaseRepository<T, ID> {
  abstract create(entity: T): Promise<void>;
  abstract findById(id: ID): Promise<T | null>;
  abstract save(entity: T): Promise<void>;
  abstract search(search: Partial<T>, take?: number): Promise<T[]>;
  abstract searchPagination(
    search: Partial<T>,
    page: number,
    limit: number,
  ): Promise<T[]>;
}
