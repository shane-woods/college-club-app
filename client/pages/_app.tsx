import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ClerkProvider } from '@clerk/nextjs'
import {dark} from '@clerk/themes'
import { ThemeProvider, useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
        <ClerkProvider {...pageProps} >
          <Component {...pageProps} />
        </ClerkProvider>
    </ThemeProvider>
     
  )
}
