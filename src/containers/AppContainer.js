import {useEffect, useState} from 'react'
import '../App.css';
import MainLayout from "../layouts/MainLayout";
import Sidebar from "../components/sidebar/Sidebar";
import PagesContainer from "./PagesContainer";
import {Page} from "../components/pages";
import {  useMediaQuery} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views";

import SidebarContainer from "./SidebarContainer";

import MainContext from "../context";
import {DrawerActionButton} from "../components/drawer";
import {Home , About , Portfolio , Quotes , Contact} from "../pages";

function AppContainer() {
    const [pageNumber, setPageNumber] = useState(0);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [mode, setMode] = useState();

    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
    const preferDarkMode = useMediaQuery("(prefer-color-scheme: dark)");

    useEffect(() => {
        setMode(preferDarkMode ? "dark" : "light");
    }, []);

    useEffect(() => {
        if (isMdUp) {
            setDrawerOpen(false);
        }
    }, [isMdUp])

    const handlePageNumber = (event , newPage) => {
        setPageNumber(newPage);
    };

    const handleThemeChange = () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    }
  return (
      <MainContext.Provider
          value={{pageNumber,
              handlePageNumber,
              handleThemeChange,
              drawerOpen,
              setDrawerOpen
          }}
          >
          <MainLayout mode={mode}>
              <SidebarContainer>
                  <Sidebar />
              </SidebarContainer>
              <DrawerActionButton/>
              <PagesContainer>
                  <SwipeableViews
                      index={pageNumber}
                      onChangePage={handlePageNumber}
                      >
                      <Page pageNumber={pageNumber} index={0}>
                          <Home helmetTitle="Sepideh Majd Kian Personal Blog"/>
                      </Page>
                      <Page pageNumber={pageNumber} index={1}>
                          <About helmetTitle="About Me"/>
                      </Page>
                      <Page pageNumber={pageNumber} index={2}>
                           <Portfolio helmetTitle="Portfolio"/>
                      </Page>
                      <Page pageNumber={pageNumber} index={3}>
                           <Quotes helmetTitle="Quotes"/>
                      </Page>
                      <Page pageNumber={pageNumber} index={4}>
                            <Contact helmetTitle="Contact Me"/>
                      </Page>
                  </SwipeableViews>
              </PagesContainer>
          </MainLayout>
      </MainContext.Provider>

  );
}

export default AppContainer;
