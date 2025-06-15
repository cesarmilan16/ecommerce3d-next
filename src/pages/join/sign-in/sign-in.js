import { JoinLayout } from "@/layouts";
import { Heading } from "@chakra-ui/react";
import Link from "next/link";
import { LoginForm } from "@/components/Auth"
import { Seo } from "@/components/Shared";
import styles from "./sign-in.module.scss";


export default function SignInPage() {
  return (
    <>
      <Seo />
      <JoinLayout>
        <div className={styles.signIn}>
          <Heading as="h3" size={"lg"}>Iniciar sesión</Heading>
          <LoginForm />

          <div className={styles.actions}>
            <Link href="/join/sign-up">¿No tienes una cuenta?</Link>
          </div>
        </div>
      </JoinLayout>
    </>
  );
}

