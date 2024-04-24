import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Header = () => {
    return (
        <AppBar position="static" sx={{ background: '#333', color: 'white' }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {/* Иконка логотипа */}
                    <img src="путь_к_логотипу" alt="Логотип" style={{ marginRight: '20px' }} />
                    <Button color="inherit">Главная</Button>
                    <Button color="inherit">Портфолио</Button>
                    {/* Dropdowns or other navigation items can be added here */}
                    <Button color="inherit">Услуги и цены</Button>
                    {/* Ссылка на Instagram */}
                    <Button color="inherit">Instagram</Button>
                    <Button color="inherit">Видео</Button>
                    <Button color="inherit">О нас</Button>
                    {/* Dropdowns for 'Контакты' can be implemented here */}
                    <Button color="inherit">Контакты</Button>
                </Box>
                <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
                    +7 123 456-7890
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
