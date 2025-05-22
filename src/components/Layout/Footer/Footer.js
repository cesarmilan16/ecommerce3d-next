import { Circle, Container, Icon, Link } from '@chakra-ui/react';
import { FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import styles from './Footer.module.scss';

export function Footer() {
    return (
        <div className={styles.footer}>
            <Container maxW="6xl" px={4}>
                <div className={styles.columns}>
                    <div>
                        <Link href="/" >
                            <img src="/images/logo.png" alt="3D Hispalis" />
                        </Link>
                    </div>


                    <div>
                        <ul>
                            <Link href={"#"}>Terminos y condiciones</Link>
                            <Link href={"#"}>Políticas de privacidad</Link>
                            <Link href={"#"}>Contacto</Link>
                            <Link href={"#"}>FAQs</Link>
                        </ul>
                    </div>

                    <div className={styles.social}>
                        <Link href="#" isExternal>
                            <Circle
                                size="30px"
                                bg="#E1306C"
                                color="white"
                                transition="all 0.2s ease"
                                _hover={{ bg: "#EC4F89" }}
                            >
                                <Icon as={FaInstagram} boxSize={5} />
                            </Circle>
                        </Link>

                        <Link href="#" isExternal>
                            <Circle
                                size="30px"
                                bg="#000000"
                                color="white"
                                transition="all 0.2s ease"
                                _hover={{ bg: "#1a1a1a" }}
                            >
                                <Icon as={FaTiktok} boxSize={4} />
                            </Circle>
                        </Link>

                        <Link href="#" isExternal>
                            <Circle
                                size="30px"
                                bg="#1DA1F2"
                                color="white"
                                transition="all 0.2s ease"
                                _hover={{ bg: "#38B3F8" }}
                            >
                                <Icon as={FaTwitter} boxSize={4} />
                            </Circle>
                        </Link>
                    </div>
                </div>

                <div className={styles.copyright}>
                    <span>© 2025 3D Hispalis. Casi todos los derechos reservados.</span>
                </div>
            </Container>
        </div>
    )
}
