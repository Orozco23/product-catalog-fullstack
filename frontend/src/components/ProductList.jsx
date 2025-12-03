import { useNavigate } from "react-router-dom";
const sampleProducts = [
  {
    sku: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: '48',
    image: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg',
    description: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    sku: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '35',
    image: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg',
    description: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    sku: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '89',
    image: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg',
    description: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    sku: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '35',
    image: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg',
    description: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    sku: 5,
    name: 'Focus Card Tray',
    href: '#',
    price: '64',
    image: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-05.jpg',
    description: 'Paper card sitting upright in walnut card holder on desk.',
  },
  {
    sku: 6,
    name: 'Focus Multi-Pack',
    href: '#',
    price: '39',
    image: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-06.jpg',
    description: 'Stack of 3 small drab green cardboard paper card refill boxes with white text.',
  },
  {
    sku: 7,
    name: 'Brass Scissors',
    href: '#',
    price: '50',
    image: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-07.jpg',
    description: 'Brass scissors with geometric design, black steel finger holes, and included upright brass stand.',
  },
  {
    sku: 8,
    name: 'Focus Carry Pouch',
    href: '#',
    price: '32',
    image: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-08.jpg',
    description: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
  }
]
export default function ProductList({ products = sampleProducts }) {

  const navigate = useNavigate();

  const renderImage = (img) => {
    if (!img) return null;
    const filename = img.split(/[/\\]/).pop();
    return `http://localhost:3000/api/images/${filename}`;
  }

  const goProduct = (product) => {
    if(localStorage.getItem('type') !== '3'){
      localStorage.setItem('product', JSON.stringify(product));
      navigate('/product');
    }
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product, idx) => (
            <a key={idx} onClick={() => goProduct(product)} className="group">
              
                <img
                  alt={product.description}
                  src={renderImage(product.image)}
                  className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                />

              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{`Q.${product.price}`}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
