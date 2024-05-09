import React from 'react';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

import CreateCaseButton from '../buttons/CreateCaseButton';
import DashboardButton from '../buttons/DashboardButton';
import SignInButton from '../buttons/SignInButton';
import SignOutButton from '../buttons/SignOutButton';
import SignUpButton from '../buttons/SignUpButton';

async function NavLinks() {
  const { getUser, isAuthenticated } = getKindeServerSession();

  const user = await getUser();
  const authenticated = await isAuthenticated();

  return (
    <div className="flex h-full items-center space-x-4">
      {authenticated && user ? (
        <>
          <DashboardButton />

          <CreateCaseButton />

          <SignOutButton />
        </>
      ) : (
        <>
          <SignUpButton />

          <SignInButton />

          <div className="hidden h-8 w-px bg-zinc-200 sm:block" />

          <CreateCaseButton />
        </>
      )}
    </div>
  );
}

export default NavLinks;
