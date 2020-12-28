export interface User {
    name: string
    password: string
}

export interface Product {
    name: string
    price: number
}

export type Bucket<T> = {[x:string]: T}

export as namespace types;