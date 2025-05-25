import { useState } from "react";
import { AddressForm } from '../AddressForm'
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";

export function AddAddress() {
  const [show, setShow] = useState(false);

  const onOpenClose = () => setShow((prevState) => !prevState);

  return (
    <>
        <Button
          position="absolute"
          right="0"
          onClick={onOpenClose}>
          Crear
        </Button>

      <Modal isOpen={show} onClose={onOpenClose} size={"3xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Nueva dirección</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AddressForm onClose={onOpenClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
