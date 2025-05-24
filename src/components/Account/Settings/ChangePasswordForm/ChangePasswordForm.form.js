import * as Yup from "yup";

export function initialValues() {
    return {
        password: "",
        repeatPassword: "",
    }
}

export function validationSchema() {
    return Yup.object({
        password: Yup.string().required("La contraseña es obligatoria"),
        repeatPassword: Yup.string()
            .required("Repite la contraseña")
            .oneOf([Yup.ref("password")], "Las contraseñas deben coincidir"),
    })
}