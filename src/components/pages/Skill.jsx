import {Divider, Chip, Box, LinearProgress, Typography, Badge} from "@mui/material";


const Skill = ({name, icon, color, value}) => {
    return (
        <>
            <Divider
                textAlign="left"
                sx={{
                    "&::before, &::after" :{
                        borderColor:`${color}.main`,
                    },
                    mt : 3,
                }}
            >
                <Chip
                    icon={
                    <Box component="img" src={icon} sx={{ height: 30}}/>
                    }
                    color={color}
                    label={name}
                    sx={{ color: "#000", p: 2 }}
                />
            </Divider>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ minWidth: 35, ml: 2 }}>
                <Typography variant="body2" color="black">
                    <Badge
                        variant="standard"
                        color={color}
                        badgeContent={`${Math.round(value)}%`}
                        />
                </Typography>
                </Box>
                <Box sx={{width: "100%" , ml: 1 }}>
                    <LinearProgress
                        variant="determinate"
                        value={value}
                        color={color}
                        sx={{
                            height: 8,
                            borderRadius: 2,
                        }}
                    />
                </Box>
            </Box>
        </>
    );
};
export default Skill;