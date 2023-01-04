import { SignIn } from "@clerk/nextjs";
import Link from "next/link";
import styles from './SignIn.module.css'

const SignInPage = () => {
  return (
    <div className={styles.signin}>
      <div className={styles.nav}>
        <Link href="/">Home</Link>
      </div>
      <SignIn 
      path="/sign-in" 
      routing="path" 
      signUpUrl="/sign-up" 
      afterSignInUrl="/dashboard"/>
    </div>
  )
}
  

export default SignInPage;