
export interface IRepo<T> {
    create (t: T): String;
    update(t: T);
    delete(s: String);
    //readById(s: String): Promise<T>;
    readAll(): Array<T>;
    //exists (t: T): Promise<boolean>;
    //save (t: T): Promise<T>;
}