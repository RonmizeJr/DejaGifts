import { hashSync } from 'bcrypt-ts-edge';

const sampleData = {
  users: [
    {
      name: 'John',
      email: 'admin@example.com',
      password: hashSync('123456', 10),
      role: 'admin',
    },
    {
      name: 'Jane',
      email: 'jane@example.com',
      password: hashSync('123456', 10),
      role: 'user',
    },
  ],
  products: [
    {
      name: 'Purple Rain',
      slug: 'purple-rain',
      category: 'Blankets',
      images: ['/assets/img/Purple Rain.jpg'],
      price: '500.00',
      rating: '4.5',
      numReviews: 10,
      stock: 1,
      description:
        'Lacoste sporting elegance with an urban twist. Fall in love with this loose, cozy sweatshirt in super-comfortable double-face piqué.',
      isFeatured: false,
      banner: '/assets/img/Purple Rain.jpg',
    },
    {
      name: "Witch's Brew",
      slug: 'witches-brew',
      category: 'Home Decor',
      images: ['/assets/img/Witches Brew.jpg'],
      price: '50.00',
      rating: '4.2',
      numReviews: 8,
      stock: 1,
      description:
        'Hit the courts like Novak Djokovic with this seamless stretch jacket, made to move your way.',
      isFeatured: true,
      banner: '/assets/img/Witches Brew',
    },
    {
      name: 'Psycho Seventies',
      slug: 'psycho-seventies',
      category: 'Blankets',
      images: ['/assets/img/psycho-seventies.jpg'],

      price: '350.00',
      rating: '4.9',
      numReviews: 3,
      stock: 1,
      description:
        'Stay stylish, whatever the weather. These showerproof track pants are here to protect you from the rain. ',
    },
    {
      name: 'Glass Slipper',
      slug: 'glass-slipper',
      category: 'Home Decor',
      images: ['/assets/img/Glass Slipper.jpg'],
      price: '50.00',
      rating: '3.6',
      numReviews: 5,
      stock: 1,
      description:
        'A tricolour design brings a distinctive edge to these lightweight tracksuit pants made of diamond taffeta. ',
    },
  ],
};

export default sampleData;
