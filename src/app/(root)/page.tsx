import ProductList from '@/components/shared/product/product-list';
import { getLatestProducts } from '@/lib/actions/product.actions';
import { Loader2 } from 'lucide-react';
import { Suspense } from 'react';

export default async function Home() {
  const latestProducts = await getLatestProducts();
  return (
    <div className='space-y-8'>
      <Suspense fallback={<Loader2 className='animate-spin text-purple-500' />}>
        <ProductList title='Newest Arrivals' data={latestProducts} />
      </Suspense>
    </div>
  );
}
