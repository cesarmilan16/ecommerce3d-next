import Link from "next/link";
import { useRouter } from "next/router";
import { IoMdCloseCircle } from "react-icons/io";
import { useAuth } from "@/hooks";
import styles from "./JoinLayout.module.scss";

export function JoinLayout(props) {
    const { children } = props;
    const { user } = useAuth();
    const router = useRouter();

    if(user) {
        router.push("/");
        return null;
    }
    

    return (
        <div className={styles.container}>
            <div className={styles.topBar}>
                <Link href="/">
                    <img src="/images/logo.png" alt="3D Hispalis"></img>
                </Link>
                <Link href="/">
                    <IoMdCloseCircle />
                </Link>
            </div>
            <div className={styles.blockLeft}>{children}</div>

            <div className={styles.blockRight} />
        </div>
    )
}
