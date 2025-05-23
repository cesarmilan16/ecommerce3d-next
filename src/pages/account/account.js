import { BasicLayout } from "@/layouts";
import { useAuth } from "@/hooks";
import { useRouter } from "next/router";
import { Tabs, Tab, TabList, TabPanels, TabPanel, Icon } from "@chakra-ui/react";
import { FaSignOutAlt, FaCog } from "react-icons/fa";
import { Info, Settings } from "@/components/Account";
import { Box, Spinner, Center } from "@chakra-ui/react";
import styles from "./account.module.scss";

export default function AccountPage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  if (!user) {
    router.push("/");
    // loading spinner
    return (
      <Center minH="100vh">
        <Spinner size="xl" color="primaryHover" thickness="6px" />
      </Center>
    );
  }


  return (
    <>
      <BasicLayout isContainer relative>
        <Info />

        <Tabs variant="line">
          <TabList>
            <Tab>Mis pedidos</Tab>
            <Tab>Lista de deseos</Tab>
            <Tab>Direcciones</Tab>
            {/* Separador flexible */}
            <Box flex="1" />

            {/* Derecha */}
            <Tab>
              <Icon as={FaCog} mr={"5px"} fontSize="20px" />
              Ajustes
            </Tab>
            <Tab onClick={logout}>
              <Icon as={FaSignOutAlt} fontSize="20px" />
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>Aquí mis pedidos</TabPanel>
            <TabPanel>Aquí la Lista de deseos</TabPanel>
            <TabPanel>Aquí las direcciones</TabPanel>
            <TabPanel>
              <Settings.ChangeNameForm />
              <div className={styles.containerForms}>
                <Settings.ChangeEmailForm />
              </div>
              <Box height="40px" />
              </TabPanel>
          </TabPanels>
        </Tabs>
      </BasicLayout>
    </>
  )
}
