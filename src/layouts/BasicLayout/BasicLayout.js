import { Box, Container } from "@chakra-ui/react";
import classNames from "classnames";
import { TopBar, Footer } from "@/components/Layout"
import styles from './BasicLayout.module.scss'

export function BasicLayout(props) {
    const { children,
        isOpenSearch = false,
        isContainer = false,
        relative = false
    } = props

    return (
        <Box display="flex" flexDirection="column" minH="100vh">
            <TopBar isOpenSearch={isOpenSearch} />

            <Box flex="1" p={0} m={0}>
                <div className={classNames({ [styles.relative]: relative })}>
                    {isContainer ? (
                        <Container maxW="container.xl" px={4}>
                            {children}
                        </Container>
                    ) : (
                        children
                    )}
                </div>
            </Box>

            <Footer />
        </Box>
    )
}
