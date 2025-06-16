import { BasicLayout } from "@/layouts";
import { useState } from "react";
import { useAuth } from "@/hooks";
import { useRouter } from "next/router";
import { Tabs, Tab, TabList, TabPanels, TabPanel, Icon } from "@chakra-ui/react";
import { FaSignOutAlt, FaCog } from "react-icons/fa";
import { Info, Settings, Address, Wishlist, Orders } from "@/components/Account";
import { Box, Spinner, Center } from "@chakra-ui/react";
import styles from "./account.module.scss";
import { Seo } from "@/components/Shared";

export default function AccountPage() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [reload, setReload] = useState(false)

  if (!user) {
    router.push("/");
    // loading spinner
    return (
      <Center minH="100vh">
        <Spinner size="xl" color="primaryHover" thickness="6px" />
      </Center>
    );
  }

  const onReload = () => setReload((prevState) => !prevState)

  return (
    <>
      <Seo title={"Mi cuenta"} />
      <BasicLayout isContainer relative>
        <Info />

        <Tabs variant="line" isLazy w="100%">
          <Box overflowX="auto" w="100%">
            <TabList
              display="flex"
              flexWrap={{ base: "nowrap", md: "wrap" }}
              whiteSpace="nowrap"
              minW="max-content"
            >
              <Tab flexShrink={0}>Mis pedidos</Tab>
              <Tab flexShrink={0}>Lista de deseos</Tab>
              <Tab flexShrink={0}>Direcciones</Tab>

              <Box flex="1" /> {/* Separador flexible */}

              <Tab flexShrink={0}>
                <Icon as={FaCog} mr={"5px"} fontSize="20px" />
                <Box display={{ base: "none", md: "inline" }}>Ajustes</Box>
              </Tab>
              <Tab flexShrink={0} onClick={logout}>
                <Icon as={FaSignOutAlt} fontSize="20px" />
              </Tab>
            </TabList>
          </Box>

          <TabPanels>
            <TabPanel><Orders /></TabPanel>
            <TabPanel><Wishlist /></TabPanel>
            <TabPanel>
              <Address.AddAddress onReload={onReload} />
              <Address.ListAddresses reload={reload} onReload={onReload} />
              <Box height="40px" />
            </TabPanel>
            <TabPanel>
              <Settings.ChangeNameForm />
              <div className={styles.containerForms}>
                <Settings.ChangeEmailForm />
                <Settings.ChangePasswordForm />
              </div>
              <Box height="40px" />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </BasicLayout>
    </>
  )
}
