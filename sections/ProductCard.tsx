import { Review } from "apps/commerce/types.ts";
import { ProductSimple } from "../types/ProductSimple.tsx";

export interface Props {
  product: ProductSimple;
}

export default function ProductCard({
  product: ProductSimple,
}: Props) {
  function discountPercentage() {
    return (ProductSimple.beforePrice - ProductSimple.currentPrice) /
      ProductSimple.beforePrice * 100;
  }

  return (
    <div class="flex flex-col items-center gap-2 sm:w-full lg:max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div class="w-full flex items-center justify-between">
        <div class="flex items-center">
          <svg
            class="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <p class="ml-2 text-sm font-bold text-gray-900 dark:text-white">
            4.95
          </p>
          <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400">
          </span>
          <a
            href="#"
            class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
          >
            {ProductSimple.reviewCount} reviews
          </a>
        </div>
        <span class="bg-blue-100 text-blue-800 text-xs font-bold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
          {discountPercentage().toFixed(0)}% off
        </span>
      </div>
      <img
        class="object-contain w-64 h-64"
        src={ProductSimple.urlImage}
        alt={ProductSimple.alternativeName}
      />

      <a href="#">
        <h5 class="mb-2 text-2xl sm:text-lg font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-2">
          {ProductSimple.name}
        </h5>
      </a>
      {/* <p class="mb-3 font-normal text-gray-500 dark:text-gray-400 line-clamp-4">
        {ProductSimple.description}
      </p> */}
      <div class="flex items-center gap-2">
        <p class="text-sm font-medium text-gray-500 line-through dark:text-white">
          R${ProductSimple.beforePrice}
        </p>
        <p class="text-xl font-bold text-green-900">
          R${ProductSimple.currentPrice}
        </p>
      </div>
    </div>
  );
}

// export default ProductCard;