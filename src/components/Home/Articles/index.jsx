import React from 'react';
import { Box, Grid, Typography, Card, CardActionArea, CardContent, CardMedia } from '@mui/material';

const articles = [
    {
        date: '17 апреля 2024',
        title: 'Идеи дизайна трехкомнатной...',
        description: 'Трешка как квартира для длительного проживания – это отличный вариант для...',
        imageUrl: 'https://designrepublic.kz/wp-content/uploads/2022/10/2-1-1049x600.jpg',
    },
    {
        date: '17 апреля 2024',
        title: 'Идеи дизайна трехкомнатной...',
        description: 'Трешка как квартира для длительного проживания – это отличный вариант для...',
        imageUrl: 'https://designrepublic.kz/wp-content/uploads/2022/10/2-1-1049x600.jpg',
    },
    {
        date: '17 апреля 2024',
        title: 'Идеи дизайна трехкомнатной...',
        description: 'Трешка как квартира для длительного проживания – это отличный вариант для...',
        imageUrl: 'https://designrepublic.kz/wp-content/uploads/2022/10/2-1-1049x600.jpg',
    },
    {
        date: '17 апреля 2024',
        title: 'Идеи дизайна трехкомнатной...',
        description: 'Трешка как квартира для длительного проживания – это отличный вариант для...',
        imageUrl: 'https://designrepublic.kz/wp-content/uploads/2022/10/2-1-1049x600.jpg',
    },

];

const NewsBlock = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h4" gutterBottom component="div">
                Блог
            </Typography>
            <Grid container spacing={4}>
                {articles.map((article, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card sx={{ overflow: 'hidden' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={article.imageUrl}
                                    alt={article.title}
                                    sx={{
                                        transition: 'transform 0.25s ease-in-out',
                                        '&:hover': {
                                            transform: 'scale(1.05)',
                                        },
                                    }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="body2" color="textSecondary">
                                        {article.date}
                                    </Typography>
                                    <Typography variant="h6" component="h2">
                                        {article.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {article.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default NewsBlock;
