import Link from 'next/link';
import Image from 'next/image';

const Login = () => {
  return (
    <main className='p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center'>
      <div className='h-full shadow-2xl rounded-md flex flex-col md:flex-row'>
        <div className='relative w-full h-1/3'>
          <Image src='/img/loginBg.webp' fill alt='' className='object-cover' />
        </div>
        <div className='p-10 flex flex-col gap-8'>
          <h1 className=''>Welcome</h1>
          <p className=''>
            Log into your account or create a new one using social buttons
          </p>
          <button className='flex items-center gap-4 p-4 ring-1 ring-orange-100 rounded-sm'>
            <Image
              src='/img/google.png'
              width={20}
              height={20}
              alt='google'
              className='object-contain'
            />
            <span className=''>Sign in with Google</span>
          </button>
          <button className='flex items-center gap-4 p-4 ring-1 ring-blue-100 rounded-sm'>
            <Image
              src='/img/facebook.png'
              width={20}
              height={20}
              alt='facebook'
              className='object-contain'
            />
            <span className=''>Sign in with Facebook</span>
          </button>
          <p className=''>
            Have a problem? <Link href='/'>Contact us</Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
