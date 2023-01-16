import '../styles/globals.css'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import type { AppProps } from 'next/app'
import { ThemeProvider, useTheme } from 'next-themes'
import React, { useState } from 'react'

export default function App({
  Component,
  pageProps 
}: AppProps<{
  initialSession: Session,
}>) {

  const [supabase] = useState(() => createBrowserSupabaseClient())

  return (
    <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionContextProvider>
  )
}
