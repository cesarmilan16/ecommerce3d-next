import { Box, Image, Icon, Text, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { map } from "lodash";
import { FaCheck, FaLock } from "react-icons/fa";

export function HeaderCart() {
  const {
    query: { step = 1 },
  } = useRouter();
  const currentStep = Number(step);

  const steps = [
    { number: 1, title: "Cesta" },
    { number: 2, title: "Pago" },
    { number: 3, title: "Confirmación" },
  ];

  return (
    <Flex
      position="fixed"
      top="0"
      left="0"
      w="100%"
      p={{ base: 3, md: 4 }}
      align="center"
      bg="backgroundTertiary"
      zIndex="10"
      direction={{ base: "column", md: "row" }}
      gap={{ base: 3, md: 0 }}
    >
      {/* Logo */}
      <Box w={{ base: "100%", md: "20%" }} textAlign={{ base: "center", md: "left" }}>
        <Link href="/">
          <Image src="/images/logo.png" alt="Logo" height="50px" mx={{ base: "auto", md: "0" }} />
        </Link>
      </Box>

      {/* Pasos */}
      <Flex
        w={{ base: "100%", md: "60%" }}
        justify="center"
        align="center"
        wrap="wrap"
      >
        {map(steps, (step, index) => (
          <Flex key={step.number} align="center" mb={{ base: 2, md: 0 }}>
            <Flex
              align="center"
              justify="center"
              border="2px solid"
              borderColor={step.number <= currentStep ? "primary" : "borderPrimary"}
              bg={step.number < currentStep ? "primary" : "transparent"}
              color={step.number < currentStep ? "white" : "textSecondary"}
              borderRadius="full"
              w="26px"
              h="26px"
              fontSize="12px"
              mr={2}
            >
              {step.number < currentStep ? <Icon as={FaCheck} fontSize="10px" /> : step.number}
            </Flex>

            <Text
              fontSize={{ base: "sm", md: "md" }}
              color={step.number === currentStep ? "textPrimary" : "textSecondary"}
            >
              {step.title}
            </Text>

            {index !== steps.length - 1 && (
              <Box
                w={{ base: "40px", md: "80px" }}
                h="2px"
                bg={step.number < currentStep ? "primary" : "borderPrimary"}
                mx={{ base: 2, md: 4 }}
              />
            )}
          </Flex>
        ))}
      </Flex>

      {/* Pago seguro */}
      <Flex
        w={{ base: "100%", md: "20%" }}
        justify={{ base: "center", md: "flex-end" }}
        align="center"
        fontSize={{ base: "xs", md: "sm" }}
      >
        <Icon as={FaLock} color="green.400" fontSize="18px" mr={2} />
        <Box pl={3} borderLeft="1px solid" borderColor="borderPrimary">
          <Text fontWeight="bold" fontSize="sm">
            Pago seguro
          </Text>
          <Text fontSize="xs" color="textSecondary" mt="-1">
            256-bit SSL Secure
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}
