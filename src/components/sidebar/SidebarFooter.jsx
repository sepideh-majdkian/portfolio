import {Box, Typography} from "@mui/material";
import {CopyrightRounded} from "@mui/icons-material";


const SidebarFooter = () => {
    return(
        <>
        <Box
            sx={{
                flexGrow:1,
                display:"flex",
                flexDirection:"column",
                justifyContent:"end",
                alignItems:"center",
                marginTop:2,
            }}
        >
            <Typography
                variant="subtitle2"
                color="text.primary">
                Designed By Sepideh Majd Kian
            </Typography>
            <Typography
                variant="caption"
                color="text.primary"
                sx={{mt:1}}
            >
                Copyright {" "}
                <CopyrightRounded
                    sx={{ verticalAlign: "middle" , width: 16 }}
                />
                {" "}2024
            </Typography>
        </Box>
        </>
    )
};
export default SidebarFooter;