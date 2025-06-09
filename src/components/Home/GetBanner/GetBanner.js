import { useState, useEffect } from 'react';
import { Box, Image, IconButton, Text } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import Slider from "react-slick";
import { Banner } from "@/api";

// Flechas personalizadas
function CustomPrevArrow({ onClick }) {
    return (
        <IconButton
            icon={<ArrowBackIcon fontSize={"2xl"} />}
            onClick={onClick}
            position="absolute"
            left="15px"
            top="50%"
            transform="translateY(-50%)"
            zIndex="2"
            aria-label="Anterior"
            bg="#transparent"
            color="#ffffff"
            transition={"all 0.2s ease-in-out"}
            _hover={{
                bg: "#a73740", // $primary-hover
                borderColor: "#a73740",
                transform: "translateY(-50%) scale(1.1)",
            }}
            _active={{
                transform: "translateY(-50%) scale(0.95)",
                bg: "none",
                borderColor: "none",
            }}
            size="md"
            rounded="full"
        />
    );
}

function CustomNextArrow({ onClick }) {
    return (
        <IconButton
            icon={<ArrowForwardIcon fontSize={"2xl"} />}
            onClick={onClick}
            position="absolute"
            right="15px"
            top="50%"
            transform="translateY(-50%)"
            zIndex="2"
            aria-label="Siguiente"
            bg="#transparent"
            color="#ffffff"
            transition={"all 0.2s ease-in-out"}
            _hover={{
                bg: "#a73740",
                borderColor: "#a73740",
                transform: "translateY(-50%) scale(1.1)",
            }}
            _active={{
                transform: "translateY(-50%) scale(0.95)",
                bg: "none",
                borderColor: "none",
            }}
            size="md"
            rounded="full"
        />
    );
}

const bannerCtrl = new Banner();

export function GetBanner() {
    const [banner, setBanner] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await bannerCtrl.getBanner();
                setBanner(response.data); // <-- guarda el array completo

            } catch (error) {
                console.error(error);
            }
        })()
    }, []);

    if (!banner || banner.length === 0) return null;

    const settings = {
        slidesToShow: 1,
        infinite: true,
        arrows: true,
        dots: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <Box
            position="relative"
            w="100%"
            h={{ base: "50vh", md: "40dvw", lg: "35dvw" }}
            overflow="hidden"
        >
            <Slider {...settings}>
                {banner.map((item, index) => (
                    <Box
                        key={index}
                        position="relative"
                        w="100%"
                        h={{ base: "50vh", md: "40dvw", lg: "35dvw" }}
                    >
                        <Image
                            src={item.image?.url}
                            alt={item.image?.title || `Banner ${index + 1}`}
                            w="100%"
                            h="100%"
                            objectFit="cover"
                        />

                        <Box
                            position="absolute"
                            bottom="20"
                            left="4"
                            bg="rgba(0, 0, 0, 0.6)"
                            color="white"
                            px="3"
                            py="1"
                            mx={1}
                            borderRadius="md"
                            fontSize="lg"
                        >
                            {item.description}
                        </Box>
                        <Box
                            position="absolute"
                            bottom="8"
                            left="4"
                            bg="rgba(0, 0, 0, 0.6)"
                            color="white"
                            px="3"
                            py="1"
                            borderRadius="md"
                            fontSize="lg"
                        >
                            {item.title}
                        </Box>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};