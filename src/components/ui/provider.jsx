import { theme } from '@/components/theme';
import { ChakraProvider } from '@chakra-ui/react';

export function Provider({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
