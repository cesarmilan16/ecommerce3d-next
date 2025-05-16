import { JoinLayout } from "@/layouts";
import styles from "./sign-up.module.scss";
import { Heading } from "@chakra-ui/react";

export default function SignUp() {
  return (
    <>
    <JoinLayout>
      <div className={styles.signUp}>
        <Heading as="h3" size={"lg"}>Crear cuenta</Heading>
      </div>
    </JoinLayout>
    </>
  )
}
