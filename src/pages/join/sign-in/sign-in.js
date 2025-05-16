import { JoinLayout } from "@/layouts";
import { Heading } from "@chakra-ui/react";
import styles from "./sign-in.module.scss";

export default function SignInPage() {
  return (
    <>
      <JoinLayout>
        <div className={styles.signIn}>
          <Heading as="h3" size={"lg"}>Iniciar sesión</Heading>
        </div>
      </JoinLayout>
    </>
  );
}

