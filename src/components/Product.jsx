function Product({ product }) {
  return (
    <div className="flex flex-col gap-9.5">
      {/* product illustraion */}
      <div className="relative">
        <picture>
          <source media="(min-width: 1280px)" srcSet={product.image.desktop} />
          <source media="(min-width: 768px)" srcSet={product.image.tablet} />
          <img src={product.image.mobile} alt="product image" />
        </picture>

        <button
          type="button"
          className="border-rose-400-1 group hover:border-red-1 absolute -bottom-5.5 left-[50%] flex h-11 w-40 -translate-x-[50%] cursor-pointer items-center justify-center rounded-full border bg-white transition-colors"
        >
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              fill="none"
              viewBox="0 0 21 20"
            >
              <g fill="#C73B0F" clipPath="url(#a)">
                <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
                <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M.333 0h20v20h-20z" />
                </clipPath>
              </defs>
            </svg>
            <span className="text-rose-900-1 group-hover:text-red-1 text-sm leading-none font-semibold transition-colors">
              Add to Cart
            </span>
          </div>
        </button>
      </div>
      {/* product illustraion */}

      {/* product info */}
      <div className="flex flex-col gap-2">
        <p className="text-rose-500-1 text-sm leading-none">
          {product.category}
        </p>
        <h2 className="text-rose-900-1 leading-none font-semibold">
          {product.name}
        </h2>
        <p className="text-red-1 leading-none font-semibold">
          ${product.price.toFixed(2)}
        </p>
      </div>
      {/* product info */}
    </div>
  );
}
export default Product;
