
import React, { useState, useEffect } from 'react';
import { Product } from '../types/products'
import { getProductByID } from 
import { assToCart } from

  interface Props {
  productId: String;
}

const SeaCreatures: React.FC<Props> = ({ productId }) => {
  const [Product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [quantity, setQuantity] = useState<number>(1);
  const [selectVariant, setSelectVariant] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const fetchedProduct = await getProductByID(productId);
        setProduct(fetchedProduct);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch product:", error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  const handleAddToCart = async () => {
    if (product) {
      try {
        await handleAddToCart({
          productId: Product.ID,
          quantity,
          variant: selectedVariant,
        });
        alert(`${quantity} of ${Product.name} added to cart!`);
      } catch (error) {
        alert("Failed to add to cart");
      }
    }
  };

  if (loading) {
    return <div> Loading product details...</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className='product-details-container'>
      <div className='product-image-gallery'>
        {product.images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
      <div className='product-info'>
        <hi className='product-name'>{product.name}</h1>
        <p className='product-price'>${product.price.toFixed(2)}</p>
        <p className='product-description'>{product.description}</p>

        {product.variants && product.variants.length > 0 && (
          <div className='product-variants'>
            <label htmlFor='variant-select'>Select Option:</label>
            <select
              id='variant-select'
              onChange={(e) => setSelectedVariant(e.target.value)}
              value={selectedVariant || ''}
            >
              <option value=''>Choose an option</option>
              {Product.variants.map((variant) => (
                <option key={variant.value} value={variant.value}>
                  {variant.label}
                </option>
              ))}
            </selected>
          </div>
        )}

        <div className='product-quantity'>
          <label htmlFor='quantity'>Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            min={1}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>
        <button
          onClick={handleAddToCart}
          disabled={!productId.inStock}
        >
          {productId.inStock ? "Add to Cart"
            : "Out of Stock"}
        </button>

        {product.reviews !== undefined && product.rating !== undefined && (
          <div className='product-reviews'>
            <span>Rating: {productId.rating} /5</span>
            <span>({product.reviews} reviews)</span>
          </div>
        )}
      </div>
    </div>
  );
  ;
}
export default SeaCreaturesPage;

