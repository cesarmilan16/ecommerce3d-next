import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import { useRef } from "react";

export function Confirm({ isOpen, onClose, onConfirm, title, message, ...rest }) {
  const cancelRef = useRef();

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isCentered
      {...rest}
    >
      <AlertDialogOverlay>
        <AlertDialogContent maxW="sm" textAlign="center">
          <AlertDialogHeader fontSize="lg" fontWeight="bold" py={2}>
            {title}
          </AlertDialogHeader>

          <AlertDialogBody textAlign={"start"} px={4} py={2}>
            {message}
          </AlertDialogBody>

          <AlertDialogFooter gap={2} justifyContent="center" p={4}>
            <Button variant={"secondary"} ref={cancelRef} onClick={onClose} flex={1}>
              Cancelar
            </Button>
            <Button onClick={onConfirm} flex={1}>
              Confirmar
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
