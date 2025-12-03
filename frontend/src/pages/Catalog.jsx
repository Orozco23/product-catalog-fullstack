import Footer from "../components/Footer";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import ProductList from "../components/ProductList";

export default function Catalog() {
  return (
      <>
        <Header />
        <ProductList />
        <Pagination />
        <Footer />
      </>
  );
}