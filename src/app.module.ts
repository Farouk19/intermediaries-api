import { Module } from '@nestjs/common'
import { IntermediariesModule } from './intermediaries/intermediaries.module'
import { ProductsModule } from './products/products.module'

@Module({
    imports: [IntermediariesModule, ProductsModule],
})
export class AppModule {}
