
import {useFormik} from "formik";
import {useTheme} from "@mui/material/styles";
import ReCAPTCHA from "react-google-recaptcha";

import {
    AccountCircle,
    Face6Rounded,
    SubjectRounded,
    EmailRounded,
} from "@mui/icons-material";
import { Helmet } from "react-helmet-async";

import worldMap from "../assets/map.svg";
import { contactValidationSchema } from "../validations/contactValidation";
import {useEffect, useState} from "react";
import {
    Card,
    CardActions,
    CardContent,
    Chip,
    Divider,
    InputAdornment,
    Slide,
    TextField,
    Button,
    Typography
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Grid2 from "@mui/material/Unstable_Grid2";

const Contact = ({helmetTitle}) => {
    const [loading, setLoading] = useState(false);
    const theme = useTheme();

    useEffect(() => {
        setLoading(true);

        return () => setLoading(false);

    } , []);

    const contactInputNames = {
        fullname : "",
        email: "",
        subject: "",
        message: "",
        recaptcha:"",
    };

    const formik = useFormik({
        initialValues: contactInputNames,
        onSubmit: (values) => {
            console.log("Form Values: ", values);

        },
        validationSchema: contactValidationSchema,
    });

    return(
        <Card
            sx={{
                height: "100vh",
                backgroundColor: "white",
                overflowY: "scroll",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent>
                <Divider
                    textAlign="center"
                    sx={{
                        mt: 2,
                        "&::before, &::after": {
                            borderColor: "warning.main",
                        },
                    }}
                >
                <Chip
                    icon={<AccountCircle/>}
                    color="warning"
                    label={
                    <Typography
                        variant="body1"
                        color="black"
                        sx={{ textAlign: "center" }}
                        >
                        Contact Me
                    </Typography>
                    }
                    sx={{ p:3 }}
                />
                </Divider>

                <Grid container sx={{ mt: 6 }} >
                    <Slide
                        direction="up"
                        in={loading}
                        style={{
                            transitionDelay: loading ? "200ms" : "0ms",
                        }}
                    >
                        <Grid
                            xs={0}
                            sm={0}
                            md={4}
                            sx={{
                                textAlign: "center",
                                backgroundImage: `url(${worldMap})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                            }}
                        >
                            <Typography
                                variant="h6"
                                color="black"
                                sx={{
                                    mt: 4,
                                    display: {
                                        xs: "none",
                                        sm: "none",
                                        md: "block",
                                        marginTop: "100px",
                                    },
                                }}
                            >
                                Contact Me
                            </Typography>
                            <Typography
                                variant="body1"
                                color="black"
                                sx={{
                                    mt: 2,
                                    display: {
                                        xs: "none",
                                        sm: "none",
                                        md: "block",
                                    },
                                }}
                            >
                                Send me an {" "}
                                <a
                                    href="mailto:younes.gh@chmail.ir"
                                    alt="email"
                                    style={{
                                        color: "primary",
                                    }}
                                >
                                    email
                                </a>

                            </Typography>
                        </Grid>
                    </Slide>

                    <Slide
                        direction="up"
                        in={loading}
                        style={{
                            transitionDelay: loading ? "200ms" : "0ms",
                        }}
                    >
                        <Grid xs={12} sm={12} md={8}>
                            <Card
                                sx={{
                                    justifyContent: "center",
                                    alignItems: "center",
                            }}
                                >
                                <form
                                    autoComplete="off"
                                    onSubmit={formik.handleSubmit}
                                >
                                    <CardContent>
                                        <Grid2 container>
                                                <Grid2 container spacing={2} xs={12} >
                                                    <Grid2 xs={12} md={6} sx={{mb:2}}>
                                                        <TextField
                                                            fullWidth
                                                            size="small"
                                                            color="warning"
                                                            label="Full Name"
                                                            Variant="outlined"
                                                            helperText={
                                                            formik.touched.
                                                                fullname
                                                                ? formik
                                                                    .errors
                                                                    .fullname
                                                                : null
                                                            }
                                                            error={Boolean(
                                                                formik.touched
                                                                    .fullname &&
                                                                formik.errors.fullname
                                                            )}
                                                            value={formik.values?.fullname}
                                                            onChange={formik.handleChange}
                                                            InputProps={{
                                                                endAdornment: (
                                                                    <InputAdornment position="end">
                                                                        <Face6Rounded/>
                                                                    </InputAdornment>
                                                                ),
                                                            }}
                                                            />
                                                        </Grid2>
                                                        <Grid2 xs={12} md={6} sx={{mb:2}}>
                                                            <TextField
                                                                fullWidth
                                                                size="small"
                                                                color="warning"
                                                                label="Email"
                                                                Variant="outlined"
                                                                helperText={
                                                                    formik.touched.
                                                                        email
                                                                        ? formik
                                                                            .errors
                                                                            .email
                                                                        : null
                                                                }
                                                                error={Boolean(
                                                                    formik.touched
                                                                        .email &&
                                                                    formik.errors.email
                                                                )}
                                                                value={formik.values?.email}
                                                                onChange={formik.email}
                                                                InputProps={{
                                                                    endAdornment: (
                                                                        <InputAdornment position="end">
                                                                            <EmailRounded/>
                                                                        </InputAdornment>
                                                                    ),
                                                                }}
                                                            />
                                                        </Grid2>
                                                        <Grid2 xs={12} md={12} sx={{mb:2}}>
                                                            <TextField
                                                                fullWidth
                                                                size="small"
                                                                color="warning"
                                                                label="Subject"
                                                                Variant="outlined"
                                                                helperText={
                                                                    formik.touched.
                                                                        subject
                                                                        ? formik
                                                                            .errors
                                                                            .subject
                                                                        : null
                                                                }
                                                                error={Boolean(
                                                                    formik.touched
                                                                        .subject &&
                                                                    formik.errors.subject
                                                                )}
                                                                value={formik.values?.subject}
                                                                onChange={formik.handleChange}
                                                                InputProps={{
                                                                    endAdornment: (
                                                                        <InputAdornment position="end">
                                                                            <SubjectRounded/>
                                                                        </InputAdornment>
                                                                    ),
                                                                }}
                                                            />
                                                        </Grid2>
                                                        <Grid xs={12} md={12} >
                                                            <TextField
                                                                fullWidth
                                                                multiline
                                                                rows={6}
                                                                size="small"
                                                                color="warning"
                                                                label="Message"
                                                                name="message"
                                                                variant="outlined"
                                                                helperText={
                                                                    formik.touched
                                                                        .message
                                                                        ? formik
                                                                            .errors
                                                                            .message
                                                                        : null
                                                                }
                                                                error={Boolean(
                                                                    formik.touched
                                                                        .message &&
                                                                    formik
                                                                        .errors
                                                                        .message
                                                                )}
                                                                value={
                                                                    formik.values
                                                                        ?.message
                                                                }
                                                                onChange={
                                                                    formik.handleChange
                                                                }
                                                            />
                                                        </Grid>
                                                </Grid2>
                                        </Grid2>
                                    </CardContent>

                                    <CardActions
                                        sx={{
                                            textAlign: "end",
                                            flexDirection: "column",

                                        }}
                                    >
                                        <ReCAPTCHA
                                            sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                                            theme={theme.palette.mode}
                                            onChange={(value) => {
                                                formik.setFieldValue(
                                                    "recaptcha",
                                                    value
                                                );
                                            }}
                                        />
                                        {formik.errors.recaptcha &&
                                            formik.touched.recaptcha && (
                                                <Typography
                                                    variant="caption"
                                                    color="error"
                                                >
                                                    {formik.errors.recaptcha}
                                                </Typography>
                                            )}
                                        <Button
                                            type="submit"
                                            color="success"
                                            variant="contained"
                                            sx={{ mt: 2 }}
                                            fullWidth
                                        >
                                            Submit
                                        </Button>
                                    </CardActions>
                                </form>
                            </Card>
                        </Grid>
                    </Slide>
                </Grid>
            </CardContent>
        </Card>
    );
};
export default Contact;