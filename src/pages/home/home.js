import { BasicLayout } from "@/layouts"
import { Home } from "@/components/Home"

export default function HomePage() {
  return (
    <>
      <BasicLayout>
        <Home.BannerLastProductPublished />
      </BasicLayout>
    </>
  );
}
