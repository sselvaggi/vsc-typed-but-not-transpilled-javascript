export class Bucket<T> {
    data: any
    constructor() {
        this.data = {}
    }
    getItem(key: string): T {
        return this.data[key]
    }
    setItem(key: string, item: T) {
        this.data[key] = item
    }
}