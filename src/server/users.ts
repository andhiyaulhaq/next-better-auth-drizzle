'use server';

import { auth } from '@/lib/auth';

export const login = async () => {
  await auth.api.signInEmail({
    body: {
      email: 'B9f6A@example.com',
      password: 'password123',
    },
  });
};

export const signUp = async () => {
  await auth.api.signUpEmail({
    body: {
      email: 'B9f6A@example.com',
      password: 'password123',
      name: 'B9f6A',
    },
  });
};
