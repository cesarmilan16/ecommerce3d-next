import Link from "next/link";
import { Image } from "@chakra-ui/react"
import { IoMdCloseCircle } from "react-icons/io";
import styles from "./JoinLayout.module.scss";

export function JoinLayout(props) {
    const { children } = props;
    return (
        <div className={styles.container}>
            <div className={styles.topBar}>
                <Link href="/">
                    <Image src="/images/logo.png" alt="3D Hispalis"></Image>
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
