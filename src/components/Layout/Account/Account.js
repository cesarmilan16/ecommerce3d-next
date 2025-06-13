import { Button, Badge, Icon } from '@chakra-ui/react';
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/router";
import classNames from 'classnames';
import { useAuth } from "@/hooks";
import styles from './Account.module.scss';

// TODO: Cambiar el total por el número de productos en el carrito
const total = 5;

export function Account() {
    const router = useRouter();
    const { user } = useAuth();

    const goToLogin = () => router.push('/join/sign-in');
    const goToAccount = () => router.push('/account');

    const goToCart = () => {
        if (!user) goToLogin();
        else router.push('/cart');
    }

    return (
        <div className={styles.account}>
            <Button>
                <Icon 
                as={FaShoppingCart} 
                onClick={goToCart} 
                boxSize={{ base: 4, md: 5 }}
                />
                {total > 0 && (
                    <Badge
                        colorScheme="red"
                        variant="solid"
                        borderRadius="full"
                        marginX={1}
                        fontSize={{ base: "xs", md: "sm" }}
                        px={1.5}
                        py={.5}
                    >
                        {total}
                    </Badge>
                )}
            </Button>

            <Button p={0} className={classNames({[styles.user]: user})}>
                <Icon 
                as={FaUser} 
                boxSize={{ base: 4, md: 5 }}
                onClick={user ? goToAccount : goToLogin} 
                />
            </Button>
        </div>
    )
}
