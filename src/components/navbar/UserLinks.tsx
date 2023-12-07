'use client';

import { signOut, useSession } from 'next-auth/react';

import NavItem from './NavItem';

const UserLinks = () => {
  const { status } = useSession();

  return (
    <div>
      {status === 'unauthenticated' ? (
        <div>
          <NavItem url='/login' label='Login' />
          <span onClick={() => signOut()}>Logout</span>
        </div>
      ) : (
        <NavItem url='/orders' label='Orders' />
      )}
    </div>
  );
};

export default UserLinks;
