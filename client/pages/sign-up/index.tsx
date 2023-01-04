import { SignUp } from "@clerk/nextjs";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import styles from './SignUp.module.css'

const SignUpPage = () => {
  return (
    <div className={styles.signup}>
      <div className={styles.nav}>
        <Link href="/">Home</Link>
      </div>
      <SignUp 
        path="/sign-up" 
        routing="path" 
        signInUrl="/sign-in" 
        afterSignUpUrl="/"
      />
    </div>
  )
}
 
  

export default SignUpPage;