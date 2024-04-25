import React, { useState } from 'react';
import Layout from "../components/Layout/Layout";
import HeroBlock from "../components/HeroBlock/HeroBlock";
import { Box, Typography, Button } from '@mui/material';
import DirectionBlock from "../components/InfoBlock/Info";
import ClientBlock from "../components/Home/ClientBlock";
import NewsBlock from "../components/Home/Articles";

function HomePage() {
    const [activeTab, setActiveTab] = useState('petiitions');

    return (
        <>
            <Box sx={{padding: "-20px"}}>
                <HeroBlock />

            </Box>

            <Layout>
<NewsBlock />
                <DirectionBlock />


            </Layout>
            <ClientBlock />
        </>

    );
}

export default HomePage;


