import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const Home = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.myca.cart);
  console.log('Cart Items:', cartItems);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios.get('http://localhost:5050/user/display');
        console.log('Fetched Products:', response.data);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    loadData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {products.map((product, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={`http://localhost:5050/${product.image[0]}`}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <div className="mt-4">
              <span className="text-blue-600 font-bold text-lg">${product.price}</span>
              <span className="text-sm text-gray-500 ml-2">Stock: {product.stock}</span>
            </div>
            <button
              className="mt-4 bg-gradient-to-br from-orange-400 to-orange-500 px-4 py-2 rounded-2xl text-white hover:from-orange-500 hover:to-orange-600 transition duration-300"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: product._id,
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    stock: product.stock,
                    images: product.image,
                    qnty: 1,
                  })
                )
              }
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
