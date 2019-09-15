export default interface IList<T> {
    add(eleme:T): void
    foreach(Action: (eleme:T) => void): void
}