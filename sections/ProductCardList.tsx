import { ProductSimple } from "$store/types/ProductSimple.tsx";
import ProductCard from "$store/sections/ProductCard.tsx"
import { productListMock } from "$store/mock/productListMock.tsx";

export interface Props {
    products?: ProductSimple[]    
}

export default function ProductCardList({
    products = productListMock,
}: Props) {
    return (
        <div class="flex sm:flex-row flex-col gap-2 w-full">
            {products.map((product) => (
                <ProductCard product={product} />
            ))}
        </div>
    )
}