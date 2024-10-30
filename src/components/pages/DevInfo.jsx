import {Typography} from "@mui/material";
import {KeyboardArrowRightRounded} from "@mui/icons-material";


const devInfo = ({children}) => {
    return(
        <Typography
            variant="body1"
            color="black"
            textAlign="left"
            sx={{ mt: 2 }}
        >
            <KeyboardArrowRightRounded
                sx={{
                    verticalAlign: "bottom",
                    color: "primary.main",
                }}
            />
            {children}
        </Typography>
    );
};
export default devInfo;