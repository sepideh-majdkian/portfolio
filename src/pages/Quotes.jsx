import {useState , useEffect} from "react";

import { Helmet } from "react-helmet-async";
import {
    Box,
    Typography,
    Avatar,
    Card,
    CardContent,
    Divider,
    Chip,
    Slide,
} from "@mui/material";
import Slider from "react-slick";
import { ForumRounded} from "@mui/icons-material";
import { quotesDetails } from "../constants/quotesDetails";


const Quotes = ({helmetTitle}) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        return () => {
            setLoading(false);
        };
    }, []);

    const options = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        cssEase: "linear",
    };

    return(
        <Card
            sx={{
                height: "100vh",
                backgroundColor: "whitesmoke",
                overflowY: "scroll",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent>
                <Slide
                    direction="down"
                    in={loading}
                    style={{
                        transitionDelay: loading ? "100ms" : "0ms",
                    }}
                >
                    <Divider
                        textAlign="center"
                        sx={{
                            "&::before, &::after": {
                                borderColor: "success.main",
                            },
                            mb: 3,
                        }}
                    >
                        <Chip
                            icon={<ForumRounded />}
                            color="success"
                            label={
                                <Typography
                                    variant="body1"
                                    color="black"
                                    sx={{ textAlign: "center" }}
                                >
                                    Quotes

                                </Typography>
                            }
                            sx={{ p: 3 }}
                        />
                    </Divider>
                </Slide>



                <Box
                    component="div"
                    sx={{
                        mt: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        margin : "4 6",

                    }}
                >
                    <Slider {...options}>
                        {quotesDetails.map((user, index) => (
                            <Box
                                key={index}
                                component="div"
                                sx={{ justifyContent: "center" ,
                                    // backgroundColor : "grey",
                                    borderRadius: "8px",

                            }}
                            >



                                <Card
                                    sx={{
                                        width: 2/3 ,
                                        m: "0 auto",
                                        backgroundColor : "grey[800]",

                                    }}
                                >
                                    <CardContent>
                                        <Avatar
                                            src={user.avatar}
                                            variant="rounded"
                                            sx={{
                                                height: 100,
                                                width: 100,
                                                margin: "0 auto",
                                                marginTop : "8px",
                                                marginBottom: "12px",
                                                borderRadius: "50%",
                                            }}
                                        />
                                        <Typography
                                            variant="body2"
                                            textAlign="center"
                                        >
                                            {user.comment}
                                        </Typography>
                                    </CardContent>

                                    <Typography
                                        variant="body1"
                                        textAlign="end"
                                        marginInlineEnd= "42px"
                                        marginBottom= "12px"
                                    >
                                        {user.fullname}
                                    </Typography>

                                </Card>
                            </Box>
                        ))}
                    </Slider>
                </Box>
            </CardContent>
        </Card>
    );

};
export default Quotes;