export abstract class BaseService<T, ID, R> {
  protected repository: R;
  abstract create(entity: T): Promise<void>;
  abstract findById(id: ID): Promise<T | null>;
  abstract save(entity: T): Promise<void>;
  abstract search(search: Partial<T>, take?: number): Promise<T[]>;
  abstract searchPagination(
    search: Partial<T>,
    skip: number,
    take: number,
  ): Promise<T[]>;
}
