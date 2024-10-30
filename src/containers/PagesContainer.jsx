
import Grid2 from "@mui/material/Unstable_Grid2";


const PagesContainer = ({ children }) => {
    return (
        <Grid2
            xs={12}
            sm={12}
            md={9}
            lg={10}
            xl={10}
            sx={{backgroundColor: "white"}}>
                {children}
        </Grid2>
    );
};
export default PagesContainer;

