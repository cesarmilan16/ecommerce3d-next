import { BasicLayout } from "@/layouts"
import { Home } from "@/components/Home"
import { Box, Container } from "@chakra-ui/react"

export default function HomePage() {
  return (
    <>
      <BasicLayout>
        <Home.GetBanner />

        <Box h={100} />

        <Container maxW={"container.lg"}>
          <Home.LatestProducts title="Ultimos lanzamientos" />
        </Container>
      </BasicLayout>
    </>
  );
}
