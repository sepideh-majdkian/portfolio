import * as Yup from 'yup';


export const contactValidationSchema = Yup.object().shape({
    fullname : Yup.string().required("Full name is required"),
    email: Yup.string()
    .email("Email is not valid")
    .required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
    recaptcha: Yup.string().required("Captcha is required"),
});