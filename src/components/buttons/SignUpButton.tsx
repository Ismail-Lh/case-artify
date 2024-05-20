import React from 'react';

import ButtonLink from './ButtonLink';

function SignUpButton() {
  return (
    <ButtonLink href="/api/auth/register" size="sm" variant="ghost">
      Sign up
    </ButtonLink>
  );
}

export default SignUpButton;
