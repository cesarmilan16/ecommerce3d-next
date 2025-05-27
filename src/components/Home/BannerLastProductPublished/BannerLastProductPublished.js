import { useState, useEffect } from 'react';
import { Box, AspectRatio, Image, IconButton, Text } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import Slider from "react-slick";
import { DateTime } from "luxon";
import Link from 'next/link';
import { Product } from "@/api";

// Flechas personalizadas
function CustomPrevArrow({ onClick }) {
    return (
        <IconButton
            icon={<ArrowBackIcon />}
            onClick={onClick}
            position="absolute"
            left="15px"
            top="50%"
            transform="translateY(-50%)"
            zIndex="2"
            aria-label="Anterior"
            bg="#1A1315" // $background-tertiary
            color="#ffffff" // $text-primary
            border="1px solid #4A3A3F" // $border-secondary
            _hover={{
                bg: "#a73740", // $primary-hover
                borderColor: "#a73740",
            }}
            size="md"
            rounded="full"
        />
    );
}

function CustomNextArrow({ onClick }) {
    return (
        <IconButton
            icon={<ArrowForwardIcon />}
            onClick={onClick}
            position="absolute"
            right="15px"
            top="50%"
            transform="translateY(-50%)"
            zIndex="2"
            aria-label="Siguiente"
            bg="#1A1315"
            color="#ffffff"
            border="1px solid #4A3A3F"
            _hover={{
                bg: "#a73740",
                borderColor: "#a73740",
            }}
            size="md"
            rounded="full"
        />
    );
}

const productCtrl = new Product();

export function BannerLastProductPublished() {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await productCtrl.getLastPublished();
                setProduct(response.data[0]);

            } catch (error) {
                console.error(error);
            }
        })()
    }, []);

    if (!product || !product.gallery || product.gallery.length === 0) return null;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <Box w="100%" maxW="900px" mx="auto" my={4} px={4} py={6} position="relative" overflow="hidden" borderRadius={"2xl"} bg="#1A1315" boxShadow="md">
            <Box mb={4} textAlign="center">
                <Text
                    fontSize="3xl"
                    fontWeight="bold"
                    color="whiteAlpha.900"
                    textShadow="0 1px 3px rgba(0,0,0,0.8)"
                    letterSpacing="wide"
                >
                    ✨ Última figura publicada
                </Text>
                <Text color="gray.400" fontSize="sm">
                    ¡Descubre la novedad más reciente en nuestra colección 3D!
                </Text>
            </Box>

            <Slider {...settings}>
                {product.gallery.map((img, index) => (
                    <Box key={index} px={2} borderRadius="lg" overflow="hidden">
                        <AspectRatio ratio={16 / 9}>
                            <Image
                                src={img.url}
                                alt={img.name || `Imagen ${index + 1}`}
                                objectFit="cover"
                                borderRadius="lg"
                            />
                        </AspectRatio>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}