export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Dejagifts';
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  'An ecommerce application made with nextjs, pg, and shadcn-ui';
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
