import React, { useState, useRef } from 'react';
import ProductDescription from '../components/Description-Scott/ProductDescription';
import Comparison from '../components/Comparison-Dorien/Comparison';
import QAs from '../components/QAs-Malcolm/QAs';
import Reviews from '../components/Reviews-Jim/Reviews';

const App = () => {
  const [productId, setProductId] = useState(18078);
  const [productName, setProductName] = useState('Camo Onesie');
  const [productRating, setProductRating] = useState(null);
  const reviewsRef = useRef();

  return (
    <div className="App">
      <ProductDescription
        productId={productId}
        productRating={productRating}
        reviewsRef={reviewsRef}
        setProductNameGlobal={setProductName}
      />
      <Comparison
        productId={productId}
        setProductId={setProductId}
      />
      <QAs
        productId={productId}
        productName={productName}
      />
      <Reviews
        productId={productId}
        reviewsRef={reviewsRef}
        setProductRating={setProductRating}
        productName={productName}
      />
    </div>
  );
};

export default App;
