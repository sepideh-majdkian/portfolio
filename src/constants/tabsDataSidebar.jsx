import {
    ConnectWithoutContactRounded,
    FaceRounded,
    HomeRounded,
    MessageRounded,
    TerminalRounded,
} from "@mui/icons-material";


const tabProps = (index) => {
    return {
        id: `sidebar-tab-${index}`,
        "aria-controls": `tabpanel-${index}`,
    };
};

export const tabsData = () => {
    const tabs = [
        {label: "Home", icon: <HomeRounded/>, ...tabProps(0)},
        {label: "About Me", icon: <FaceRounded/>, ...tabProps(1)},
        {label: "Portfolio" , icon: <TerminalRounded/>, ...tabProps(3)},
        {label: "Quotes", icon: <MessageRounded/>, ...tabProps(4)},
        {label: "Contact Me", icon: <ConnectWithoutContactRounded/>, ...tabProps(5)},
    ];
    return tabs;
};