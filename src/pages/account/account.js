import { BasicLayout } from "@/layouts";
import { Heading } from '@chakra-ui/react'

export default function AccountPage() {
  return (
    <>
      <BasicLayout isContainer relative>
        <Heading as='h2' size='lg'marginTop={100}>
          Account
        </Heading>
      </BasicLayout>
    </>
  )
}
