'use client';

import * as React from 'react';

import { MoonIcon, SunIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

export function ModeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = React.useCallback(() => {
    console.log(`Current theme: ${resolvedTheme}`);
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  }, [resolvedTheme, setTheme]);

  return (
    <Button
      variant="ghost"
      className="group/toggle size-8 px-0 cursor-pointer"
      onClick={toggleTheme}
    >
      <SunIcon className="hidden dark:block" />
      <MoonIcon className="block dark:hidden" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
