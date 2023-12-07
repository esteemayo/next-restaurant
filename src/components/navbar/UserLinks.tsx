'use client';

import { signOut, useSession } from 'next-auth/react';

import NavItem from './NavItem';

const UserLinks = () => {
  const { status } = useSession();

  return (
    <div className='flex items-center'>
      {status === 'unauthenticated' ? (
        <NavItem url='/login' label='Login' />
      ) : (
        <div>
          <NavItem url='/orders' label='Orders' />
          <span onClick={() => signOut()}>Logout</span>
        </div>
      )}
    </div>
  );
};

export default UserLinks;
