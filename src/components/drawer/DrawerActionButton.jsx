import {Box, Fab} from "@mui/material";
import {MenuRounded} from "@mui/icons-material";

import { useContext } from "react";

import MainContext from "../../context";

const DrawerActionButton = () => {
    const {setDrawerOpen} = useContext(MainContext);

    return (
        <Box
            sx={{
                position: "absolute",
                display: {
                    xs: "block",
                    sm: "block",
                    md: "none",
                    lg: "none",
                    xl: "none",
                },
            }}
        >
            <Fab
                color="primary"
                aria-label="Sidebar"
                size="small"
                onClick={() => setDrawerOpen(true)}
                sx={{m: 2}}
            >
                <MenuRounded/>
            </Fab>
        </Box>

    );
};
export default DrawerActionButton;
