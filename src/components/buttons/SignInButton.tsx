import React from 'react';

import NavLink from '../navbar/NavLink';

function SignInButton() {
  return (
    <NavLink href="/api/auth/login" size="sm" variant="ghost">
      Login
    </NavLink>
  );
}

export default SignInButton;
