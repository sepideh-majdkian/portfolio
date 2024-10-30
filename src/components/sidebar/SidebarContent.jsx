import { Box, Divider} from "@mui/material";
import {grey} from "@mui/material/colors";

import {SidebarHeader , SidebarTabs , SidebarFooter} from "./";


const SidebarContent = () => {
    return (
        <Box
            sx={{
                justifyContent:"center",
                textAlign:"center",
                mt: 2,
            }}
        >
            <SidebarHeader/>

            <Divider variant="middle"  sx={{mt:2 , mb:1}}/>

            <SidebarTabs />

            <Divider variant="middle" sx={{mt:1}}/>

            <SidebarFooter/>
        </Box>
    );
};

export default SidebarContent;