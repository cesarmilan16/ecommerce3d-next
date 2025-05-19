import { BasicLayout } from "@/layouts"
import { Heading } from "@chakra-ui/react"

export default function HomePage() {
  return (
    <BasicLayout>
        <Heading as="h3" size="md" paddingTop={200} paddingBottom={860}>HOME</Heading>
    </BasicLayout>
  )
}
