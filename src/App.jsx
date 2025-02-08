import Cart from "./components/Cart";
import Order from "./components/Order";
import ProductList from "./components/ProductList";

function App() {
  return (
    <>
      <Order />
      <div className="bg-rose-50-1 min-h-dvh">
        <div className="mx-auto flex max-w-[1216px] flex-col gap-8 p-6 md:p-10 xl:flex-row xl:px-0 xl:py-22">
          <ProductList />
          <Cart />
        </div>
      </div>
    </>
  );
}
export default App;
