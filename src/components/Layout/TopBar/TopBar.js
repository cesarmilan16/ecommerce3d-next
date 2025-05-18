import Link from 'next/link';
import styles from './TopBar.module.scss';

export function TopBar(props) {
    const { isOpenSearch } = props

  return (
    <div className={styles.topBar}>
        <div className={styles.left}>
            <Link href="/" className={styles.logo}>
                <img src="/images/logo.png" alt="3D Hispalis"></img>
            </Link>
        </div>

        <div className={styles.center}>
            <span>MENÚ</span>
        </div>

        <div className={styles.right}>
            <span>ACCOUNT</span>
        </div>
    </div>
  )
}
