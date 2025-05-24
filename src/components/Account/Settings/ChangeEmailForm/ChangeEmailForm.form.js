import * as Yup from 'yup';

export function initialValues(email, repeatEmail) {
  return {
    email: email || "",
    repeatEmail: repeatEmail || "",
  };
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string()
      .email("El correo electrónico no es válido")
      .required("El correo electrónico es obligatorio"),
    repeatEmail: Yup.string()
      .email("El correo electrónico no es válido")
      .required("El correo electrónico es obligatorio")
      .oneOf([Yup.ref("email")], "Los correos electrónicos deben coincidir"),
  });
}