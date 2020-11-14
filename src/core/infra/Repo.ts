
export interface Repo<T> {
  exists (t: T): Promise<boolean>;
  save (t: T): Promise<T>;
  //create (t: T): String;
  //update(t: T);
//  delete(s: String);
  //readById(s: String): Promise<T>;
}