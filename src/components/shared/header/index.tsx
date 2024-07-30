import Image from 'next/image';
import Link from 'next/link';
import { APP_NAME } from '@/lib/constants';
import Menu from './menu';

const Header = async () => {
  return (
    <header className='w-full border-b'>
      <div className='wrapper flex-between'>
        <div className='flex-start'>
          <Link href='/' className='flex-start'>
            <Image
              src='/assets/icons/logo.svg'
              width={48}
              height={48}
              alt={`${APP_NAME} logo`}
            />
            <h2 className='font-semibold'>{APP_NAME}</h2>
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
