import {Card, CardContent} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import {CodeRounded, SelfImprovementRounded} from "@mui/icons-material";
import avatar from "../assets/avatar.jpg"
import {DevInfo , Skill} from "../components/pages";
import {devSkills} from "../constants/skills";
import {useEffect, useState} from "react";
import {Helmet} from "react-helmet-async";
import {CustomAvatar, CustomDivider} from "../components/common";

const About = ({helmetTitle}) => {
    const [javascript, setJavascript] = useState(0);
    const [html, setHtml] = useState(0);
    const [css, setCss] = useState(0);
    const [reactJs, setReactJs] = useState(0);
    const [git, setGit] = useState(0);

    useEffect( () => {
        const timer = setInterval(()=>{
            setJavascript((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress+diff , 75);
            });

            setHtml((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress+diff , 95);
            });

            setCss((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress+diff , 90);
            });

            setReactJs((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress+diff , 75);
            });

            setGit((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress+diff , 60);
            });
        } , 200);
        return () => {
            clearInterval(timer);
        };
    }, []);


    const {htmlSkill, cssSkill,jsSkill, reactSkill, gitSkill} =
    devSkills

    return(
        <Card
            sx={{
                height: "100vh",
                backgroundColor: "white",
                overflowY: "scroll",
            }}
            >
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent>
                <Grid2 container sx={{ mx: 3 , mt:5 }}>
                    <Grid2 xs={12} sm={12} md={8} lg={8} xl={8}>
                        <CustomDivider
                            bColor="primary.main"
                            cColor="primary"
                            icon={<CodeRounded />}
                            align="right"
                            text="Web Developer"
                            />

                        <DevInfo> Full Name : Sepideh Majd Kian</DevInfo>
                        <DevInfo>City : Tehran</DevInfo>
                        <DevInfo>Email : sepideh.majdkian@gmail.com</DevInfo>

                        </Grid2>
                    <Grid2 xs={0} sm={0} md={4} lg={4} xl={4}>
                        <CustomAvatar
                            avatar={avatar}
                            size={200}
                            fallback="SMK"
                        />
                    </Grid2>
                </Grid2>
                <Grid2 container>
                    <Grid2 sx={{ width:1 , mt :1 }}>
                        <CustomDivider
                            bColor="secondary.main"
                            cColor="secondary"
                            icon={<SelfImprovementRounded />}
                            align="center"
                            text="My Skills"
                        />
                        <Skill
                        name={htmlSkill.name}
                        icon={htmlSkill.icon}
                        color={htmlSkill.color}
                        value={html}
                        />
                        <Skill
                            name={cssSkill.name}
                            icon={cssSkill.icon}
                            color={cssSkill.color}
                            value={css}
                        />
                        <Skill
                            name={jsSkill.name}
                            icon={jsSkill.icon}
                            color={jsSkill.color}
                            value={javascript}
                        />
                        <Skill
                            name={reactSkill.name}
                            icon={reactSkill.icon}
                            color={reactSkill.color}
                            value={reactJs}
                        />
                        <Skill
                            name={gitSkill.name}
                            icon={gitSkill.icon}
                            color={gitSkill.color}
                            value={git}
                        />
                    </Grid2>
                </Grid2>
            </CardContent>
        </Card>
    );
};
export default About;