

import {darkTheme, lightTheme} from "./theme/theme";
import {ThemeProvider} from "@mui/material";
import { HelmetProvider} from "react-helmet-async";
import Grid2 from "@mui/material/Unstable_Grid2";



const MainLayout = ({ children , mode }) => {
    const theme = mode === "dark" ? darkTheme : lightTheme;
    return(
        <>
            <ThemeProvider theme={theme}>
                <HelmetProvider>
                    <Grid2 container sx={{height: "100vh"}}>
                        {children}
                    </Grid2>
                </HelmetProvider>
            </ThemeProvider>
        </>
    );
};
export default MainLayout;