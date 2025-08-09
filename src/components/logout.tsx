'use client';

import { Loader2, LogOut } from 'lucide-react';

import { Button } from './ui/button';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function Logout() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setIsLoading(true);
    await authClient.signOut();
    router.push('/');
    setIsLoading(false);
  };

  return (
    <Button
      type="submit"
      variant="outline"
      className="cursor-pointer"
      onClick={handleLogout}
      disabled={isLoading}
    >
      {isLoading ? (
        <Loader2 className="size-4 animate-spin" />
      ) : (
        <>
          Logout <LogOut className="size-4" />
        </>
      )}
    </Button>
  );
}
