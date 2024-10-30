import {Avatar, Typography} from "@mui/material";
import avatar from "../../assets/avatar.jpg"
import {RandomReveal} from "react-random-reveal";
import {useState} from "react";
import ThemeContext from "../../components/ThemeActionButton";
import ThemeActionButton from "../../components/ThemeActionButton";
import {CustomAvatar} from "../common";

const SidebarHeader = () => {
    const [start, setStart] = useState(0);
    return (
        <>
            <ThemeActionButton/>
            <CustomAvatar
                avatar={avatar}
                size={180}
                fallback="SMK"
            />

            <Typography variant="h6" component="div" sx={{marginTop:2 ,color: "white"}}>
                    Sepideh Majd Kian
            </Typography>
            <Typography variant="caption"  component="div" sx={{color: "grey"}}>
                <RandomReveal
                    isPlaying
                    duration={2}
                    characters={"Web Developer"}
                    onComplete={() => setStart(true)}
                />
            </Typography>
        </>
    )
};
export default SidebarHeader;