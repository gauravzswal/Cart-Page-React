import Nav from "./component/Nav";
import ProductList from "./component/ProductList";
import { CartProvider } from "./Context/CartContext";

function App() {
  return (
    <CartProvider>
      <Nav />
      <ProductList />
    </CartProvider>
  );
}

export default App;
