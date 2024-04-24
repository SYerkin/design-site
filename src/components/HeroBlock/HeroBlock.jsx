import React from 'react';
import { Box, Typography, Button, AppBar, Toolbar, Container } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const HeroBlock = () => {
    return (
        <Box
            sx={{

                top: "64px",
                left: "0",
                width: '100%',
                height: '100vh',
                color: 'white',
                backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://designrepublic.kz/wp-content/uploads/2021/10/02.webp")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                p: 4, // padding
            }}
        >
            <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none' }}>
                <Toolbar>
                    {/* Place your navigation items here */}
                </Toolbar>
            </AppBar>
            <Container
                maxWidth="md"
                sx={{
                    zIndex: 2,
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h2" component="h1" sx={{ fontWeight: 700, mb: 4 }}>
                    Заманауи интерьер дизайны және жөндеу
                </Typography>
                <Typography variant="h5" sx={{ mb: 4 }}>
                    Жөндеу кезінде кешенді сүйемелдеу,"под ключ" материалдармен және жиһазбен жинақтау.
                </Typography>
                <Button
                    variant="outlined"
                    startIcon={<PlayCircleOutlineIcon />}
                    sx={{
                        borderColor: 'white',
                        color: 'white',
                        textTransform: 'none',
                        fontSize: '1rem',
                        p: '12px 24px',
                        mb: 2,
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        },
                    }}
                >
                    Толығырақ
                </Button>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        '& .MuiButton-root': {
                            ml: 2,
                            color: 'white',
                            '&:first-of-type': {
                                ml: 0,
                            },
                            '&:hover': {
                                color: 'rgba(255, 255, 255, 0.75)',
                            },
                        },
                    }}
                >
                    <Button><PhoneIcon /></Button>
                    <Button><MailOutlineIcon /></Button>
                    <Button><LocationOnIcon /></Button>
                </Box>
            </Container>
        </Box>
    );
};

export default HeroBlock;
