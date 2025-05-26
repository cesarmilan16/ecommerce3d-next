import { FormLabel, FormControl, FormErrorMessage } from '@chakra-ui/react';
import { Box, Flex, Input, Button } from '@chakra-ui/react';
import { useFormik } from "formik";
import { Address } from '@/api';
import { useAuth } from "@/hooks"; 
import { initialValues, validatioSchema } from "./AddressForm.form";

const addressCtrl = new Address();

export function AddressForm(props) {
    const { onClose, onReload, addressId, address } = props;
    const { user } = useAuth();

    const formik = useFormik({
        initialValues: initialValues(address),
        validationSchema: validatioSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                if (addressId) {
                    console.log("ACTUALIZAR DIRECCIÓN");
                } else {
                    await addressCtrl.create(formValue, user.id);
                }

                formik.handleReset();
                onReload();
                onClose();
            } catch (error) {
                console.error(error);
            }
        }
    })

    return (
        <Box as="form" onSubmit={formik.handleSubmit}>
            <FormLabel>Introduzca los datos</FormLabel>
            <Flex align="flex-start">
                <FormControl isInvalid={!!formik.errors.title} flex="1" mb={4}>
                    <Input
                        placeholder="Titulo de la dirección"
                        name="title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                    />
                    <FormErrorMessage>{formik.errors.title}</FormErrorMessage>
                </FormControl>
            </Flex>
            <Flex align="flex-start">
                <FormControl isInvalid={!!formik.errors.name} flex="1" mr={4} mb={4}>
                    <Input
                        placeholder="Nombre y Apellidos"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />
                    <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!formik.errors.address} flex="1" mb={4}>
                    <Input
                        placeholder="Introduzca su dirección"
                        name="address"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                    />
                    <FormErrorMessage>{formik.errors.address}</FormErrorMessage>
                </FormControl>
            </Flex>
            <Flex align="flex-start">
                <FormControl isInvalid={!!formik.errors.state} flex="1" mr={4} mb={4}>
                    <Input
                        placeholder="Provinvia"
                        name="state"
                        value={formik.values.state}
                        onChange={formik.handleChange}
                    />
                    <FormErrorMessage>{formik.errors.state}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!formik.errors.city} flex="1">
                    <Input
                        placeholder="Ciudad"
                        name="city"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                    />
                    <FormErrorMessage>{formik.errors.city}</FormErrorMessage>
                </FormControl>
            </Flex>
            <Flex align="flex-start">
                <FormControl isInvalid={!!formik.errors.postal_code} flex="1" mr={4} mb={4}>
                    <Input
                        placeholder="Código postal"
                        name="postal_code"
                        value={formik.values.postal_code}
                        onChange={formik.handleChange}
                    />
                    <FormErrorMessage>{formik.errors.postal_code}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!formik.errors.phone} flex="1">
                    <Input
                        placeholder="Teléfono"
                        name="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                    />
                    <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
                </FormControl>
            </Flex>
            <Button type="submit" isLoading={formik.isSubmitting} mb={4}>
                Enviar
            </Button>
        </Box>
    )
}
