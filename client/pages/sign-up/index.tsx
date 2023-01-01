import { SignUp } from "@clerk/nextjs";
import styles from './SignUp.module.css'

const SignUpPage = () => {
  return (
    <div className={styles.signup}>
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
  )
}
 
  

export default SignUpPage;