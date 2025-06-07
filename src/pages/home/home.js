import { BasicLayout } from "@/layouts"
import { Home } from "@/components/Home"
import { Box } from "@chakra-ui/react"

export default function HomePage() {
  return (
    <>
      <BasicLayout>
        <Home.GetBanner />

        <Box h={100} />
      </BasicLayout>
    </>
  );
}
