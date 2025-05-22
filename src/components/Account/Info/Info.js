import { useAuth } from "@/hooks";
import { DateTime } from "luxon";
import { Button, Icon, Heading } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import styles from './Info.module.scss';

export function Info() {
  const { user } = useAuth();

  return (
    <div className={styles.info}>
      <Button
        bg="backgroundQuaternary"
        borderRadius="20px"
        height="100px"
        width="100px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mb="20px"
        cursor="auto"
        p={0} // ya tienes height/width, así que paddings no hacen falta
        _hover={{ bg: "backgroundQuaternary" }} // sin efecto hover
      >
        <Icon as={FaUser} fontSize="50px" />
      </Button>

      <Heading as="h3" fontSize={"30px"} mb={"10px"} >
        {user.username}
      </Heading>
      <Heading as="h4" size="sm" mb={"10px"}>
        {user.email}
      </Heading>
      <p className={styles.createdAt}>Miembro desde: {DateTime.fromISO(user.createdAt, {locale: "es"}).toFormat("DDD")}</p>
    </div>
  )
}
