import { ProductCategory } from './product-category';
import { Brand } from './brand';

export class Product {
    id: number;
    name: string;
    quantity: number;
    price: number;
    measureUnit: string;
    imagePath: string;
    productCategory: ProductCategory;
    brand: Brand;
}