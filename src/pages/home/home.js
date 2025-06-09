import { BasicLayout } from "@/layouts"
import { Home } from "@/components/Home"
import { Box, Container } from "@chakra-ui/react"
import { BarTrust } from "@/components/Shared"

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
      </BasicLayout>
    </>
  );
}
