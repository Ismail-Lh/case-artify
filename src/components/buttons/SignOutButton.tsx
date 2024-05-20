import React from 'react';

import ButtonLink from './ButtonLink';

function SignOutButton() {
  return (
    <ButtonLink href="/api/auth/logout" size="sm" variant="ghost">
      Sign out
    </ButtonLink>
  );
}

export default SignOutButton;
