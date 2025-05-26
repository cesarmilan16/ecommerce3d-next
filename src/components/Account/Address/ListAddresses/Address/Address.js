import { useState } from "react";
import {
  Box,
  Text,
  Flex,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody
} from "@chakra-ui/react";
import { EditIcon, CloseIcon } from "@chakra-ui/icons";
import { AddressForm } from "../../AddressForm"

export function Address(props) {
    const { addressId, address, onReload } = props;
    const [showEdit, setShowEdit] = useState(false)

    const openCloseEdit = () => setShowEdit((prevState) => !prevState);

    return (
        <>
            <Flex
                bg="backgroundQuaternary"
                borderRadius="md"
                p={4}
                mt={4}
                mb={3}
                align="center"
                justify="space-between"
            >
                <Box>
                    <Text fontWeight="bold">
                        {address.title}:
                    </Text>
                    <Text color="gray.300" mt={1}>
                        {address.name}, {address.address}, {address.city}, {address.state}, {address.postal_code}
                    </Text>
                </Box>

                <Flex gap={2}>
                    <IconButton
                        icon={<EditIcon />}
                        aria-label="Editar dirección"
                        size="sm"
                        onClick={openCloseEdit}
                    />
                    <IconButton
                        icon={<CloseIcon />}
                        aria-label="Eliminar dirección"
                        size="sm"
                    />
                </Flex>
            </Flex>

            <Modal isOpen={showEdit} onClose={openCloseEdit} size={"3xl"}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Editar dirección</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <AddressForm 
                        onClose={openCloseEdit} 
                        onReload={onReload} 
                        addressId={addressId}
                        address={address} />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
