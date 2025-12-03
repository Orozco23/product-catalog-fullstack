import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import ProductList from "../components/ProductList";
import { getProductsForClient, getProducts } from "../fetch/Product.fetch";
import { useNavigate } from "react-router-dom";
import ButtonCreate from "../components/ButtonCreate";

export default function Catalog() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    // If not logged in, redirect to login
    if (!localStorage.getItem('type')) {
      navigate('/');
    }

    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        if (localStorage.getItem('type') === '3') {
          const response = await getProductsForClient({ page: currentPage });
          setProducts(response.data);
          setTotalPages(response.totalPages);
        } else {
          const response = await getProducts({ page: currentPage });
          setProducts(response.data);
          setTotalPages(response.totalPages);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    
    fetchProducts();

  }, [currentPage]);

  
  return (
      <>
        <Header />
        <ProductList
          products={products}
        />
        <Pagination />
        <Footer />
        <ButtonCreate />
      </>
  );
}