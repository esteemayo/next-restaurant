import Image from 'next/image';

const Login = () => {
  return (
    <main>
      <div className=''>
        <div className='relative'>
          <Image src='/img/loginBg.png' fill alt='' />
        </div>
        <div className=''>
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
          <button className='flex items-center gap-4 p-4 ring-1 ring-orange-100 rounded-sm'>
            <Image
              src='/img/facebook.png'
              width={20}
              height={20}
              alt='facebook'
              className='object-contain'
            />
            <span className=''>Sign in with Facebook</span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Login;
