import * as Yup from 'yup';

export function initialValues(firstname, lastname) {
    return {
        firstname: firstname || "",
        lastname: lastname || "",
    };
}

export function validationSchema() {
    return Yup.object().shape({
        firstname: Yup.string()
            .required("El nombre es obligatorio")
            .min(2, "El nombre debe tener al menos 2 caracteres")
            .max(20, "El nombre no puede tener más de 20 caracteres"),
        lastname: Yup.string()
            .required("Los apellidos son obligatorios")
            .min(2, "Los apellidos deben tener al menos 2 caracteres")
            .max(20, "Los apellidos no pueden tener más de 20 caracteres"),
    });
}