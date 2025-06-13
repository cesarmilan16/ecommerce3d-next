import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Box,
  Flex,
  Icon,
  Input,
  Image,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  useBreakpointValue,
  Button,
} from "@chakra-ui/react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { map } from "lodash";
import { Category } from "@/api";

const categoryCtrl = new Category();

export function Menu() {
  const [categories, setCategories] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const isMobile = useBreakpointValue({ base: true, md: true, lg: false });

  useEffect(() => {
    (async () => {
      try {
        const response = await categoryCtrl.getAll();
        setCategories(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const onSearch = () => {
    if (searchText.trim() !== "") {
      router.replace(`/search?s=${searchText.trim()}`);
    }
  };

  const openCloseSearch = () => setShowSearch(prev => !prev);

  return (
    <Box
      position="relative"
      bg="backgroundQuaternaryBlur"
      borderRadius="full"
      px={6}
      py={{ base: 1, md: 3, lg: 5 }}
      w="100%"
      maxW={{
        base: showSearch ? "180px" : "130px",
        md: showSearch ? "380px" : "130px",
        lg: "max-content"
      }}
      pr="89px"
      ml="auto"
      mr="auto"
      display="flex"
      alignItems="center"
      backdropFilter="blur(10px)"
      overflow="hidden"
    >
      {/* Menú hamburguesa en móvil */}
      {isMobile && (
        <Button
          onClick={onOpen}
          variant="ghost"
          color="white"
          mr={4}
          minW="auto"
          p={0}
        >
          <Icon as={FaBars} fontSize="20px" />
        </Button>
      )}

      {/* Categorías en escritorio */}
      {!isMobile && (
        <Flex align="center" gap={6}>
          {map(categories, (category) => (
            <Link key={category.id} href={`/categories/${category.slug}`}>
              <Flex
                align="center"
                color="white"
                _hover={{
                  textDecoration: "none",
                  color: "primary",
                }}
                whiteSpace="nowrap"
              >
                <Image
                  src={category.icon.url}
                  alt={category.title}
                  h="20px"
                  mr={2}
                  filter="brightness(0) invert(1)"
                />
                {category.title}
              </Flex>
            </Link>
          ))}
        </Flex>
      )}

      {/* Botón lupa */}
      <Box
        position="absolute"
        top="0"
        right="0"
        h="100%"
        w="65px"
        bg="primary"
        borderLeftRadius={0}
        borderRightRadius="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
        _hover={{ bg: "primaryHover" }}
        onClick={openCloseSearch}
      >
        <Icon as={FaSearch} color="white" fontSize="18px" />
      </Box>

      {/* Input flotante */}
      {showSearch && (
        <Box
          position="absolute"
          left={0}
          top={0}
          w="100%"
          h="100%"
          borderRadius="full"
          border={"1px solid gold"}
          bg="backgroundSecondary"
          display="flex"
          alignItems="center"
          px={{ base: 3, md: 3, lg: 4 }}
          pr="50px"
          zIndex={10}
        >
          <Input
            placeholder="Buscar..."
            variant="unstyled"
            color="textPrimary"
            fontSize="16px"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") onSearch();
            }}
            _placeholder={{ color: "whiteAlpha.700" }}
          />

          <Icon
            as={FaTimes}
            position="absolute"
            right="20px"
            top="50%"
            transform="translateY(-50%)"
            fontSize="18px"
            color="textPrimary"
            cursor="pointer"
            onClick={openCloseSearch}
          />
        </Box>
      )}

      {/* Drawer lateral para móvil */}
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="backgroundPrimary">
          <DrawerCloseButton color="white" />
          <DrawerHeader color="white">Categorías</DrawerHeader>
          <DrawerBody>
            {map(categories, (category) => (
              <Link key={category.id} href={`/categories/${category.slug}`}>
                <Flex
                  as="a"
                  align="center"
                  py={3}
                  px={2}
                  color="white"
                  _hover={{ bg: "whiteAlpha.200", borderRadius: "md" }}
                  onClick={onClose} // 👈 aquí cierras el Drawer
                >
                  <Image
                    src={category.icon.url}
                    alt={category.title}
                    h="20px"
                    mr={3}
                    filter="brightness(0) invert(1)"
                  />
                  {category.title}
                </Flex>
              </Link>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
