import { BasicLayout } from "@/layouts";
import { Home } from "@/components/Home";
import { Box, Container } from "@chakra-ui/react";
import { BarTrust, BannerAd } from "@/components/Shared";

const categoryId = {
  figuras: 2,
  decoracion: 4,
  accesorios: 6,
  juegosDeMesa: 8,
}

export default function HomePage() {
  
  return (
    <>
      <BasicLayout>
        <Home.GetBanner />

        <Box h={100} />

        <Container maxW={"container.lg"}>
          <Home.LatestProducts title="Últimos lanzamientos" />
        </Container>

        <Box h={100} />

        <BarTrust />

        <Box h={100} />

        <Container maxW={"container.lg"}>
          <Home.LatestProducts title="Figuras" limit={3} categoryId={categoryId.figuras} />
        </Container>

        <Box h={50} />

        <BannerAd index={1}/>

        <Box h={50} />

        <Container maxW={"container.lg"}>
          <Home.LatestProducts title="Decoración" limit={3} categoryId={categoryId.decoracion} />
        </Container>

        <Box h={100} />
      </BasicLayout>
    </>
  );
}
