import Modal from "./Modal";
const items = [
  {
    image: {
      thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
      mobile: "./assets/images/image-waffle-mobile.jpg",
      tablet: "./assets/images/image-waffle-tablet.jpg",
      desktop: "./assets/images/image-waffle-desktop.jpg",
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
      mobile: "./assets/images/image-creme-brulee-mobile.jpg",
      tablet: "./assets/images/image-creme-brulee-tablet.jpg",
      desktop: "./assets/images/image-creme-brulee-desktop.jpg",
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
      mobile: "./assets/images/image-macaron-mobile.jpg",
      tablet: "./assets/images/image-macaron-tablet.jpg",
      desktop: "./assets/images/image-macaron-desktop.jpg",
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-tiramisu-thumbnail.jpg",
      mobile: "./assets/images/image-tiramisu-mobile.jpg",
      tablet: "./assets/images/image-tiramisu-tablet.jpg",
      desktop: "./assets/images/image-tiramisu-desktop.jpg",
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-baklava-thumbnail.jpg",
      mobile: "./assets/images/image-baklava-mobile.jpg",
      tablet: "./assets/images/image-baklava-tablet.jpg",
      desktop: "./assets/images/image-baklava-desktop.jpg",
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-meringue-thumbnail.jpg",
      mobile: "./assets/images/image-meringue-mobile.jpg",
      tablet: "./assets/images/image-meringue-tablet.jpg",
      desktop: "./assets/images/image-meringue-desktop.jpg",
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-cake-thumbnail.jpg",
      mobile: "./assets/images/image-cake-mobile.jpg",
      tablet: "./assets/images/image-cake-tablet.jpg",
      desktop: "./assets/images/image-cake-desktop.jpg",
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-brownie-thumbnail.jpg",
      mobile: "./assets/images/image-brownie-mobile.jpg",
      tablet: "./assets/images/image-brownie-tablet.jpg",
      desktop: "./assets/images/image-brownie-desktop.jpg",
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-panna-cotta-thumbnail.jpg",
      mobile: "./assets/images/image-panna-cotta-mobile.jpg",
      tablet: "./assets/images/image-panna-cotta-tablet.jpg",
      desktop: "./assets/images/image-panna-cotta-desktop.jpg",
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
  },
];
function Order() {
  return (
    <Modal>
      <div className="flex flex-col gap-8">
        {/* title */}
        <div className="flex flex-col gap-6">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 32.121L13.5 24.6195L15.6195 22.5L21 27.879L32.3775 16.5L34.5 18.6225L21 32.121Z"
              fill="#1EA575"
            />
            <path
              d="M24 3C19.8466 3 15.7865 4.23163 12.333 6.53914C8.8796 8.84665 6.18798 12.1264 4.59854 15.9636C3.0091 19.8009 2.59323 24.0233 3.40352 28.0969C4.21381 32.1705 6.21386 35.9123 9.15077 38.8492C12.0877 41.7861 15.8295 43.7862 19.9031 44.5965C23.9767 45.4068 28.1991 44.9909 32.0364 43.4015C35.8736 41.812 39.1534 39.1204 41.4609 35.667C43.7684 32.2135 45 28.1534 45 24C45 18.4305 42.7875 13.089 38.8493 9.15076C34.911 5.21249 29.5696 3 24 3ZM24 42C20.4399 42 16.9598 40.9443 13.9997 38.9665C11.0397 36.9886 8.73256 34.1774 7.37018 30.8883C6.0078 27.5992 5.65134 23.98 6.34587 20.4884C7.04041 16.9967 8.75474 13.7894 11.2721 11.2721C13.7894 8.75473 16.9967 7.0404 20.4884 6.34587C23.98 5.65133 27.5992 6.00779 30.8883 7.37017C34.1774 8.73255 36.9886 11.0397 38.9665 13.9997C40.9443 16.9598 42 20.4399 42 24C42 28.7739 40.1036 33.3523 36.7279 36.7279C33.3523 40.1036 28.7739 42 24 42Z"
              fill="#1EA575"
            />
          </svg>
          <div className="flex flex-col gap-2">
            <h2 className="text-rose-900-1 text-[40px] leading-[120%] font-bold">
              Order Confirmed
            </h2>
            <p className="text-rose-500-1 leading-none">
              We hope you enjoy your food!
            </p>
          </div>
        </div>
        {/* title */}

        {/* confirmed items */}
        <div className="bg-rose-50-1 flex flex-col gap-6 rounded-lg p-6">
          <ul className="flex max-h-[380px] flex-col overflow-y-auto pr-3">
            {items.map((item) => (
              <li
                key={item.name}
                className="border-rose-100-1 flex items-center justify-between border-b py-4 first:pt-0 last:border-none last:pb-0"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image.thumbnail}
                    alt={`${item.name} thumbnail`}
                    className="size-12 rounded-sm"
                  />

                  <div className="flex flex-col gap-3">
                    <h3 className="text-rose-900-1 text-sm leading-none font-semibold">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-red-1 leading-none font-semibold">
                        1x
                      </span>
                      <span className="text-rose-500-1 leading-none">
                        @&nbsp;${item.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-rose-900-1 leading-none font-semibold">
                  ${item.price.toFixed(2)}
                </p>
              </li>
            ))}
          </ul>

          <hr className="border-rose-100-1" />

          <div className="text-rose-900-1 flex items-center justify-between">
            <p className="text-sm leading-none">Order Total</p>
            <p className="text-2xl leading-none font-bold">$46.50</p>
          </div>
        </div>
        {/* confirmed items */}

        <button
          className="bg-red-1 w-full cursor-pointer rounded-[999px] py-4 leading-none font-semibold text-white transition-colors hover:bg-[#952C0B]"
          type="button"
        >
          Start New Order
        </button>
      </div>
    </Modal>
  );
}
export default Order;
