'use server';

import { auth } from '@/lib/auth';

export const login = async (email: string, password: string) => {
  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });

    return {
      success: true,
      message: 'Login successful',
    };
  } catch (error) {
    const e = error as Error;

    return {
      success: false,
      message: e.message || 'An error occurred during login. Please try again.',
    };
  }
};

export const signUp = async (email: string, password: string, name: string) => {
  try {
    await auth.api.signUpEmail({
      body: {
        email,
        password,
        name,
      },
    });

    return {
      success: true,
      message:
        'Sign up successful. Please check your email to verify your account.',
    };
  } catch (error) {
    const e = error as Error;

    return {
      success: false,
      message:
        e.message || 'An error occurred during sign up. Please try again.',
    };
  }
};
