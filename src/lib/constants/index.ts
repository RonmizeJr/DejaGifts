export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Dejagifts';
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  'An ecommerce application made with nextjs, pg, and shadcn-ui';

export const PAGE_SIZE = Number(process.env.PAGE_SIZE) || 3;

export const PAYMENT_METHODS = process.env.PAYMENT_METHODS
  ? process.env.PAYMENT_METHODS.split(', ')
  : ['PayPal', 'Stripe', 'CashOnDelivery'];
export const DEFAULT_PAYMENT_METHOD =
  process.env.DEFAULT_PAYMENT_METHOD || 'PayPal';

export const signInDefaultValues = {
  email: '',
  password: '',
};

export const signUpDefaultValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const ShippingAddressDefaultValues = {
  firstName: '',
  lastName: '',
  streetAddress: '',
  city: '',
  state: '',
  postalCode: '',
  country: '',
};
