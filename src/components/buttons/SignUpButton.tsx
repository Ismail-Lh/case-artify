import React from 'react';

import NavLink from '../navbar/NavLink';

function SignUpButton() {
  return (
    <NavLink href="/api/auth/register" size="sm" variant="ghost">
      Sign up
    </NavLink>
  );
}

export default SignUpButton;
