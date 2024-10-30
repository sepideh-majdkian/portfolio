import {grey} from "@mui/material/colors";
import Grid2 from "@mui/material/Unstable_Grid2";
import {useTheme} from "@mui/material/styles";

const SidebarContainer = ({children}) => {
    const theme = useTheme();
    return (
        <Grid2
            xs={0}
            sm={0}
            md={3}
            lg={2}
            xl={2}
            sx={{ backgroundColor:
                theme.palette.mode === "dark" ? grey[800] : grey[500],
                height: "100vh",
                overflowX: "hidden",
                overflowY: "auto",
        }}
        >
            {children}
        </Grid2>
    )
}
export default SidebarContainer;