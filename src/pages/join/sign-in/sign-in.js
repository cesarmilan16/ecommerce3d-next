import { Heading } from "@chakra-ui/react";
import styles from "./sign-in.module.scss";

export default function SignInPage() {
  return (
    <div className={styles.signIn}>
        <Heading as="h3" size={"xl"}>SignInPage</Heading>
    </div>
  );
}

