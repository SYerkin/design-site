import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChairIcon from '@mui/icons-material/Chair';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const DirectionBlock = () => {
    return (
        <Box sx={{ flexGrow: 1, my: 4 }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                Наши основные направления
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center' }}>
                    <HomeIcon sx={{ fontSize: 60 }} />
                    <Typography variant="h6" component="h3" gutterBottom>
                        Дизайн жилых интерьеров
                    </Typography>
                    <Typography variant="body1">
                        Квартиры и загородные дома
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center' }}>
                    <BusinessCenterIcon sx={{ fontSize: 60 }} />
                    <Typography variant="h6" component="h3" gutterBottom>
                        Интерьер для бизнеса
                    </Typography>
                    <Typography variant="body1">
                        Офисы, гостиницы, рестораны, кафе и др.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center' }}>
                    <ChairIcon sx={{ fontSize: 60 }} />
                    <Typography variant="h6" component="h3" gutterBottom>
                        Производство мебели
                    </Typography>
                    <Typography variant="body1">
                        Корпусная и мягкая мебель
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center' }}>
                    <AccountBalanceIcon sx={{ fontSize: 60 }} />
                    <Typography variant="h6" component="h3" gutterBottom>
                        Архитектура и проектирование
                    </Typography>
                    <Typography variant="body1">
                        Архитектурное и инженерное проектирование
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DirectionBlock;
