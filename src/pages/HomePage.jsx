import React, { useState } from 'react';
import Layout from "../components/Layout/Layout";
import HeroBlock from "../components/HeroBlock/HeroBlock";
import { Box, Typography, Button } from '@mui/material';

function HomePage() {
    const [activeTab, setActiveTab] = useState('petiitions');

    return (
        <>
            <Box sx={{padding: "-20px"}}>
                <HeroBlock />

            </Box>
            <Layout>

                <Box sx={{paddingtop: "100vh"}}>
                    asdasd
                </Box>
                <Box>
                    asdasd
                </Box>
                <Box>
                    asdasd
                </Box>
                <Box>
                    asdasd
                </Box>
                <Box>
                    asdasd
                </Box><Box>
                asdasd
            </Box>

            </Layout>
        </>

    );
}

export default HomePage;


