import { Box, Text } from "@chakra-ui/react";

export function NoResult(props) {
    const { text } = props;
  return (
    <Box mt={50} textAlign={"center"}>
        <Text color={"textSecondary"}>{text}</Text>
    </Box>
  )
}
