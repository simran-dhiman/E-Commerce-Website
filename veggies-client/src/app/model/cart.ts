import { User } from './user';
import { Product } from './product';

export class Cart {
    id: number;
    user: User;
    product: Product;
    quantity: number;
}