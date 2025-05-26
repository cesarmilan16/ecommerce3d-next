import * as Yup from "yup";

export function initialValues(address) {
    return {
        title: address?.title || "",
        name: address?.name || "",
        address: address?.address || "",
        state: address?.state || "",
        city: address?.city || "",
        postal_code: address?.postal_code || "",
        phone: address?.phone || ""
    }
}

export function validatioSchema() {
    return Yup.object({
        title: Yup.string().required("El título es obligatorio"),
        name: Yup.string().required("El nombre es obligatoria"),
        address: Yup.string().required("La dirección es obligatoria"),
        state: Yup.string().required("La provincia es obligatoria"),
        city: Yup.string().required("La ciudad es obligatoria"),
        postal_code: Yup.string().required("El código postal es obligatorio"),
        phone: Yup.string()
            .required("El número es obligatorio")
            .matches(/^\d+$/, "El número solo puede contener dígitos")
            .min(9, "Debe tener al menos 9 dígitos")
            .max(9, "No puede tener más de 9 dígitos"),
    })
}