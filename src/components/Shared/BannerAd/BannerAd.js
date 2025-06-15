import { useEffect, useState } from "react";
import { Box, Image, Button, Text, VStack } from "@chakra-ui/react";
import { Banner } from "@/api/banner";
import Link from "next/link";

const bannerCtrl = new Banner();

export function BannerAd(props) {
    const { index } = props

    const [banner, setBanner] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await bannerCtrl.getBanner();
                setBanner(response.data[index]); // solo el primero
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    if (!banner) return null;

    return (
        <Box
            position="relative"
            w="100%"
            h="350px"
            borderRadius="lg"
            overflow="hidden"
        >
            <Image
                src={banner.image.url}
                alt={banner.image.title}
                objectFit="cover"
                w="100%"
                h="100%"
            />
            <Box
                position="absolute"
                top="0"
                left="0"
                w="100%"
                h="100%"
                bg="rgba(0, 0, 0, 0.4)"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <VStack spacing={4} color="white" textAlign="center">
                    <Text fontSize="2xl" fontWeight="bold">
                        Cuéntanos tu idea y la haremos realidad con impresión 3D de calidad
                    </Text>
                    <Link href={banner.link || "#"}>
                        <Button size="lg" color={"textPrimary"} mt={4}>
                            Contáctanos
                        </Button>
                    </Link>
                </VStack>
            </Box>
        </Box>
    );
}
