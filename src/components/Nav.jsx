import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Home from './Home';
import About from './about/About';
import Project from './projects/Project';
import Contact from './contact/Contact';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './css/nav.css'
const Nav = () => {
    const [value, setValue] = useState();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const theme = createTheme({
        components: {
            MuiTab: {
                styleOverrides: {
                    root: {
                        fontFamily: "fira code, monospace",
                        textTransform: "none",
                        color: "#607B96"
                    }
                }
            }
        }
    });

    return (
        <div className="">

            <Box sx={{ width: '100%' }} className="about-border">
                <ThemeProvider theme={theme} >
                    <TabContext value={value}>
                        <Tabs
                            sx={{ flexGrow: 1 }}
                            value={value}
                            onChange={handleChange}
                            aria-label="wrapped label tabs example"
                        >      <Tab
                                value="one"
                                label="yash-nerkar"
                                wrapped
                                disabled
                                className="tabcolor name-tab text-light"
                            />


                            <Tab value="two" label="_hello" className="tabcolor">
                                {/* <Home /> */}
                            </Tab>
                            <Tab value="three" label="_about-me" className="tabcolor" >
                                {/* <About /> */}
                            </Tab>
                            <Tab value="four" label="_projects" className="tabcolor" />
                            <Box
                                className="contact-box"
                            >
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    aria-label="wrapped label tabs example"
                                >
                                    <Tab value="five" label="_contact-me" className="tabcolor">
                                    </Tab>
                                </Tabs>
                            </Box>
                        </Tabs>
                        <TabPanel value="two" className="p-0 m-0"><Home /></TabPanel>
                        <TabPanel value="three" className="p-0"><About /></TabPanel>
                        <TabPanel value="four" className="p-0"><Project /></TabPanel>
                        <TabPanel value="five" className="p-0"><Contact /></TabPanel>
                    </TabContext>
                </ThemeProvider>
            </Box >
        </div >
    )
}

export default Nav