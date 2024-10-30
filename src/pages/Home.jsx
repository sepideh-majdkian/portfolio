import {Box, Typography} from "@mui/material";
import home_background from "../assets/home_background.jpg";
import Typed from "typed.js";
import {useEffect, useRef, useState} from "react";
import TextTransition, { presets } from "react-text-transition";
import {Helmet} from "react-helmet-async";

const Home = ({helmetTitle}) => {
    const nameEl = useRef(null);
    const [index, setIndex] = useState(0);

    const strings =[
        "Front-End Developer",
        "React",
        "HTML",
        "CSS",
        "Bootstrap",
        "Tailwind",
    ];

    useEffect(() => {
        const typedName = new Typed(nameEl.current, {
            strings : ["Sepideh Majd Kian"],
            typedSpeed : 50,
            backDelay: 80,
            backSpeed: 50,
            showCursor: false,
        });
        const stringsTransition = setInterval(() => {
            setIndex((index) => index + 1 );
        }, 3000)
        return () => {
            typedName.destroy();
            clearInterval(stringsTransition);
        };
    }, []);

    return (
        <Box sx={{
            backgroundImage: `url(${home_background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            display : "flex",
            flexDirection : "column",
            justifyContent: "center",
            alignItems: "center"
        }}
        >
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <Typography ref={nameEl} variant="h3" color="black"></Typography>

            <TextTransition springConfig={presets.wobbly}>
                <Typography
                    variant="h4"
                    color="white"
                    sx={{
                        mt:4,
                    }}
                >
                {strings[index % strings.length] }
                </Typography>
            </TextTransition>
            <Typography
                variant="h4"
                color="white"
                ></Typography>
        </Box>

    );
};
export default Home;