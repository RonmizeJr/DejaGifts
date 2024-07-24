import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Product } from '../../../../types';
import ProductPrice from './product-price';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className='w-full max-w-sm'>
      <CardHeader className='p-0 items-center'>
        <Link href={`/products/${product.slug}`}>
          <Image
            src={product.images![0]}
            alt={product.name}
            height={300}
            width={300}
            className='aspect-square object-cover rounded'
          />
        </Link>
      </CardHeader>
      <CardContent className='p-6 grid gap-4'>
        <div className='grid gap-1.5 text-sm leading-4'>
          <Link href={`/products/${product.slug}`}>
            <h2 className='text-sm font-medium'>{product.name}</h2>
          </Link>
        </div>
        <div className='flex-between gap-4'>
          <p>{product.rating} stars</p>
          {product.stock > 0 ? (
            <ProductPrice value={Number(product.price)} />
          ) : (
            <p className='text-destructive'>Out of stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
