import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Product {
    id: bigint;
    name: string;
    description: string;
    available: boolean;
    category: Category;
    price: bigint;
}
export enum Category {
    flower = "flower",
    keychain = "keychain"
}
export interface backendInterface {
    addProduct(name: string, description: string, price: bigint, category: Category, available: boolean): Promise<Product>;
    getAllProducts(): Promise<Array<Product>>;
    getProductById(id: bigint): Promise<Product>;
    getProductsByCategory(category: Category): Promise<Array<Product>>;
}
