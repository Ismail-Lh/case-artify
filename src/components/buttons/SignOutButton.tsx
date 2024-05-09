import React from 'react';

import NavLink from '../navbar/NavLink';

function SignOutButton() {
  return (
    <NavLink href="/api/auth/logout" size="sm" variant="ghost">
      Sign out
    </NavLink>
  );
}

export default SignOutButton;
