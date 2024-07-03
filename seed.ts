// SEED THE DB
import {
	product,
	productImage,
	productSize,
	productTag,
	productToProductTag
} from './src/lib/server/db/schema';
import { drizzle } from 'drizzle-orm/planetscale-serverless';
import { connect } from '@planetscale/database';
import 'dotenv/config';

const seed = async () => {
	// crete db client
	const connection = connect({
		host: process.env.DATABASE_HOST ?? '',
		username: process.env.DATABASE_USERNAME ?? '',
		password: process.env.DATABASE_PASSWORD ?? ''
	});

	const db = drizzle(connection);

	// create some products
	const products = [
		{
			name: 'Demo Stripe Product',
			desc: 'A test product, the first test product made testing testing testing testing',
			// can be whatever
			id: 'my_first_product'
		},
		{
			name: 'My Second Product',
			desc: 'A second test product...',
			id: 'my_second_product'
		}
	];

	const insertedProducts = (await db.insert(product).values(products)).rows;

	console.log(`INSERTED: ${insertedProducts.length} products`);

	// create some product sizes
	// TODO STRIPE:
	// replace the stripeProductId and stripePriceId which you get from the dashboard
	const productSizes = [
		{
			code: 'first_12_12',
			width: 12,
			height: 12,
			price: 5000,
			stripeProductId: 'prod_QP5tYtXQ2lkaes',
			stripePriceId: 'price_1PYHhoRqZghHGGfwuWlUO5eM',
			productId: 'my_first_product'
		},
		{
			code: 'first_16_16',
			width: 16,
			height: 16,
			price: 7000,
			stripeProductId: 'prod_QP5woqNxvqFgpC',
			stripePriceId: 'price_1PYHkwRqZghHGGfw4ZGEv2ZG',
			productId: 'my_first_product'
		},
		{
			code: 'first_24_24',
			width: 24,
			height: 24,
			price: 10000,
			stripeProductId: 'prod_QP64kfmXuUEIvD',
			stripePriceId: 'price_1PYHsGRqZghHGGfw8gKXGPRN',
			productId: 'my_first_product'
		},
		{
			code: 'second_12_12',
			width: 12,
			height: 12,
			price: 5000,
			stripeProductId: 'prod_QP671dLrAfKMw1',
			stripePriceId: 'price_1PYHvfRqZghHGGfwiwvCTnpk',
			productId: 'my_second_product'
		},
		{
			code: 'second_16_16',
			width: 16,
			height: 16,
			price: 7000,
			stripeProductId: 'prod_QP69NsyDGymRiY',
			stripePriceId: 'price_1PYHxfRqZghHGGfw7aU40oVd',
			productId: 'my_second_product'
		},
		{
			code: 'second_24_24',
			width: 24,
			height: 24,
			price: 10000,
			stripeProductId: 'prod_QP6BumooogA57a',
			stripePriceId: 'price_1PYHzPRqZghHGGfwbwJtNeML',
			productId: 'my_second_product'
		}
	];

	const insertedProductSizes = (await db.insert(productSize).values(productSizes)).rows;

	console.log(`INSERTED: ${insertedProductSizes.length} product sizes`);

	// create some product images
	// TODO CLOUDINARY: update the cloudinaryIds with your own cloudinary ids
	const images = [
		{
			cloudinaryId: 'wddhxgqgjn0vieahwzfx',
			width: 1920,
			height: 1280,
			productId: 'my_first_product'
		},
		{
			cloudinaryId: 'ccptfiycaqap5bygykcq',
			width: 1920,
			height: 1280,
			productId: 'my_second_product'
		},
		{
			cloudinaryId: 'Spring Blossom',
			width: 1920,
			height: 1280,
			productId: 'my_first_product'
		},
		{
			cloudinaryId: 'xn7bysuclyztsts0tzqn',
			width: 1920,
			height: 1280,
			productId: 'my_second_product'
		}
	];

	const insertedImages = (await db.insert(productImage).values(images)).rows;

	console.log(`INSERTED: ${insertedImages.length} product images`);

	// create some product tags
	const productTags = [
		{
			name: 'Blankets',
			desc: '100% Acrylic yarn with many styles'
		},
		{
			name: 'Jewelry',
			desc: 'Earrings, bracelets, & more...'
		},
		{
			name: 'Clothing',
			desc: 'Scarfs, hats, and more...'
		},
		{
			name: 'Accessories',
			desc: 'purses, wallets, and more...'
		}
	];

	const insertedTags = (await db.insert(productTag).values(productTags)).rows;

	console.log(`INSERTED ${insertedTags.length} product tags`);

	// attach tags to products
	const productsToTags = [
		{
			productId: 'Spring Blosson',
			tagId: 'Blankets'
		},
		{
			productId: 'Squirtle Keychain',
			tagId: 'Accessories'
		},
		{
			productId: 'Brown Hat',
			tagId: 'Clothing'
		}
	];

	const insertedTagsToProducts = (await db.insert(productToProductTag).values(productsToTags)).rows;

	console.log(`INSERTED ${insertedTagsToProducts.length} product tag relations`);
};

seed();
