import { Box, Image } from "@chakra-ui/react";

export function HeaderCover(props) {
    const { image } = props;
  return (
    <Box
    display={"flex"}
    position={"relative"}
    h={500}
    >
        <Image 
        src={image}
        objectFit={"cover"}
        width={"100%"}
        />
    </Box>
  )
}
