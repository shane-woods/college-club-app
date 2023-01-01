import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { 
  ClerkProvider,
  SignedIn,
  SignedOut
} from '@clerk/nextjs'
import { env } from 'process'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>
     
  )
}
