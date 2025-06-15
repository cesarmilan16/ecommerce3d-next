import { JoinLayout } from "@/layouts";
import { RegisterForm } from "@/components/Auth"
import { Heading } from "@chakra-ui/react";
import Link from "next/link";
import styles from "./sign-up.module.scss";
import { Seo } from "@/components/Shared";

export default function SignUp() {
  return (
    <>
      <Seo />
      <JoinLayout>
        <div className={styles.signUp}>
          <Heading as="h3" size={"lg"}>Crear cuenta</Heading>
          {<RegisterForm />}

          <div className={styles.actions}>
            <Link href="/join/sign-in">Atras</Link>
          </div>
        </div>
      </JoinLayout>
    </>
  )
}
