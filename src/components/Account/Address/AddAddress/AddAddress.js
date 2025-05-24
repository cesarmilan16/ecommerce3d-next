import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";

export function AddAddress() {
  const [show, setShow] = useState(false);

  const onOpenClose = () => setShow((prevState) => !prevState);

  console.log(show);


  return (
    <>
      <Box display="flex" justifyContent="flex-end">
        <Button onClick={onOpenClose}>
          Crear
        </Button>
      </Box>
    </>
  )
}
