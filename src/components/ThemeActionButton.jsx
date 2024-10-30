import {Box, Fab} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useContext } from "react";

import MainContext from "../context";
import { WbSunnyOutlined, NightlightOutlined } from "@mui/icons-material";

const ThemeActionButton = () => {
    const theme = useTheme();
    const { handleThemeChange } = useContext(MainContext);

    const {setDrawerOpen} = useContext(MainContext);

    return (
        <Box
            sx={{
                position: "absolute",
                display: {
                    xs: "none",
                    md: "block",
                },
            }}
        >
            <Fab
                color="primary"
                aria-label="ThemeChanger"
                size="small"
                variant = "extended"
                onClick={handleThemeChange}
                sx={{m: 1 , color: "white"}}
            >
                {theme.palette. mode === "dark" ? (
                    <WbSunnyOutlined  />
                ) : (
                    <NightlightOutlined />
                )}
            </Fab>
        </Box>

    );
};
export default ThemeActionButton;