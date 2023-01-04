import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ClerkProvider } from '@clerk/nextjs'
import {dark} from '@clerk/themes'
import { ThemeProvider, useTheme } from 'next-themes'
import React from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const {theme, setTheme} = useTheme();
  return (
    <ThemeProvider>
      {theme === 'light' ? (
        <ClerkProvider {...pageProps}
        appearance={{
          variables: {
            colorBackground:"white",
            colorInputText:"white"
          }
        }}>
          <Component {...pageProps} />
        </ClerkProvider>
      ) : (
        <ClerkProvider {...pageProps} 
          appearance={{
            baseTheme:dark,
            variables: {
              colorBackground:"#171b1f",
              colorInputText:"#171b1f"
            }
          }}>
          <Component {...pageProps} />
        </ClerkProvider>
      )}
     
    </ThemeProvider>
     
  )
}
