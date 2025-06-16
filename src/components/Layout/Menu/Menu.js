import { useState, useEffect, useRef } from "react";
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
import { Category, Product } from "@/api"; // ✅ importamos Product

const categoryCtrl = new Category();
const productCtrl = new Product(); // ✅ instancia

export function Menu(props) {
  const { isOpenSearch } = props;
  const [categories, setCategories] = useState([]);
  const [showSearch, setShowSearch] = useState(isOpenSearch);
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const inputRef = useRef(null);

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

  useEffect(() => {
    if (typeof router.query.s === "string" && searchText === "") {
      setSearchText(router.query.s);
    }
  }, [router.query.s]);

  useEffect(() => {
    if (showSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showSearch]);

  const onSearch = () => {
    router.replace(`/search?s=${searchText}`);
    setResults([]);
  };

  const openCloseSearch = () => {
    setShowSearch(prev => !prev);
    setResults([]);
  };

  // ✅ Búsqueda usando la API Product centralizada
  useEffect(() => {
    if (searchText.length < 2) {
      setResults([]);
      return;
    }

    const fetchResults = async () => {
      const data = await productCtrl.searchByTitle(searchText);
      setResults(data);
    };

    const delayDebounce = setTimeout(fetchResults, 300);
    return () => clearTimeout(delayDebounce);
  }, [searchText]);

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
      overflow="visible"
    >
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
          border="1px solid gold"
          bg="backgroundSecondary"
          display="flex"
          alignItems="center"
          px={{ base: 3, md: 3, lg: 4 }}
          pr="50px"
          zIndex={10}
        >
          <Input
            id="search-products"
            placeholder="Buscar..."
            ref={inputRef}
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

      {/* Resultados flotantes */}
      {showSearch && results.length > 0 && (
        <Box
          position="absolute"
          top="100%"
          left={0}
          w="100%"
          mt={2}
          bg="backgroundSecondary"
          borderRadius="md"
          boxShadow="lg"
          zIndex={20}
          p={2}
        >
          {results.map((item) => (
            <Link key={item.id} href={`/${item.slug}`} onClick={() => setShowSearch(false)}>
              <Flex
                align="center"
                py={2}
                px={3}
                _hover={{ bg: "whiteAlpha.200", cursor: "pointer", borderRadius: "md" }}
              >
                <Image
                  src={item.cover.url}
                  alt={item.title}
                  boxSize="40px"
                  objectFit="cover"
                  mr={3}
                  borderRadius="md"
                />
                <Box color="white">{item.title}</Box>
              </Flex>
            </Link>
          ))}
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
                  onClick={onClose}
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
