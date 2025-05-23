import { FormLabel, FormControl, FormErrorMessage } from '@chakra-ui/react';
import { Box, Flex, Input, Button } from '@chakra-ui/react';
import { useAuth } from "@/hooks";
import { User } from "@/api";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./ChangeNameForm.form";

const userCtrl = new User();

export function ChangeNameForm() {
  const { user } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(user.firstname, user.lastname),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await userCtrl.updateMe(user.id, formValue);
      } catch (error) {
        console.error("Error al enviar el formulario", error);
      }
    },
  });

  return (
    <Box as="form" onSubmit={formik.handleSubmit}>
      <FormLabel>Nombre y apellidos</FormLabel>

      <Flex align="flex-start">
        <FormControl isInvalid={!!formik.errors.firstname} flex="1">
          <Input
            placeholder="Nombre"
            name="firstname"
            value={formik.values.firstname}
            onChange={formik.handleChange}
          />
          <FormErrorMessage>{formik.errors.firstname}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!formik.errors.lastname} flex="1" ml="4">
          <Input
            placeholder="Apellidos"
            name="lastname"
            value={formik.values.lastname}
            onChange={formik.handleChange}
          />
          <FormErrorMessage>{formik.errors.lastname}</FormErrorMessage>
        </FormControl>

        <Box ml="4">
          <Button type="submit" isLoading={formik.isSubmitting}>
            Enviar
          </Button>
        </Box>
      </Flex>
    </Box>
  )
}
