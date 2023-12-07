'use client';

import { signOut, useSession } from 'next-auth/react';

import NavItem from './NavItem';

const UserLinks = () => {
  const { status } = useSession();

  return (
    <div>
      {status === 'unauthenticated' ? (
        <NavItem url='/login' label='Login' />
      ) : (
        <div className='flex items-center'>
          <NavItem url='/orders' label='Orders' />
          <span className='ml-4 cursor-pointer' onClick={() => signOut()}>Logout</span>
        </div>
      )}
    </div>
  );
};

export default UserLinks;
