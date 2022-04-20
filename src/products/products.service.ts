import { Injectable } from '@nestjs/common'
import { Product } from './product.model'

@Injectable()
export class ProductsService {
    private products: Product[] = [
        { id: '1', name: 'Maestro', price: 3 },
        { id: '2', name: 'Said', price: 1 },
        { id: '4', name: 'Delice', price: 11.45 },
    ]

    getAllProducts() {
        return this.products.sort((p1, p2) => p1.price - p2.price)
    }
}
