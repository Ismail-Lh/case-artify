import React from 'react';

import ButtonLink from './ButtonLink';

function SignInButton() {
  return (
    <ButtonLink href="/api/auth/login" size="sm" variant="ghost">
      Login
    </ButtonLink>
  );
}

export default SignInButton;
