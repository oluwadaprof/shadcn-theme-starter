'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

//define new theme colors here so it shows the color in the dropdown
//go to the layout to add the theme name to the themes prop in the ThemeProvider
//go to global.css to add the cssVariable colors in the @layer styles to render the colors accross your application
const themeColors: Record<string, string> = {
  orange: 'bg-orange-800',
  light: 'bg-white',
  dark: 'bg-gray-800',
  red: 'bg-red-600',
  rose: 'bg-rose-600'
}

export const ThemeSwitcher = () => {
  const { setTheme, themes, theme: currentTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className='rounded-full' size='icon'>
          <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        {themes.map(theme => (
          <DropdownMenuItem key={theme} onClick={() => setTheme(theme)}>
            <div
              className={`flex h-4 w-4 items-center justify-center rounded-full ${currentTheme === 'light' ? 'border-black bg-white' : 'border-white'} border-spacing-1 border-2`}
            >
              <div className={`h-2 w-2 rounded-full ${themeColors[theme]}`} />
            </div>
            {theme}
            {theme === currentTheme && (
              <span className='ml-2 text-green-500'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='inline h-4 w-4'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 13l4 4L19 7'
                  />
                </svg>
              </span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
