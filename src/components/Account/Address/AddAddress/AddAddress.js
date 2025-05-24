import { useState } from "react";
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";

export function AddAddress() {
  const [show, setShow] = useState(false);

  const onOpenClose = () => setShow((prevState) => !prevState);

  return (
    <>
      <Box display="flex" justifyContent="flex-end">
        <Button onClick={onOpenClose}>
          Crear
        </Button>
      </Box>

      <Modal isOpen={show} onClose={onOpenClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Nueva dirección</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Aquí iría tu formulario de dirección.
          </ModalBody>

          <ModalFooter>
            <Button onClick={onOpenClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
