import React, { useState } from 'react';
import { Box, Typography, Button, Modal, TextField, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
};

const ClientBlock = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box sx={{ bgcolor: 'black', color: 'white', p: 4, textAlign: 'center' }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
                Сіздің жобаңызды талқылайық
            </Typography>
            <Typography variant="h6" sx={{ mb: 2 }}>
                Кері байланыс ақпаратын қалдырыңыз
            </Typography>
            <div>
                <Button variant="contained" onClick={handleOpen}
                        sx={{bgcolor: '#d28944', '&:hover': {bgcolor: '#b36b2e'}}}>
                    Форманы толтырыңыз
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <IconButton
                            aria-label="close"
                            onClick={handleClose}
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                            }}
                        >
                            <CloseIcon/>
                        </IconButton>
                        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{mb: 2}}>
                            Өтінім қалдыру
                        </Typography>
                        <Typography id="modal-modal-description" sx={{mt: 2, mb: 2}}>
                            Сізбен жақын арада хабарласамыз
                        </Typography>
                        <TextField fullWidth label="Введите Ваше Имя" variant="outlined" margin="dense"/>
                        <TextField fullWidth label="Введите Ваш телефон" variant="outlined" margin="dense" required/>
                        <Button variant="contained" sx={{mt: 2, bgcolor: '#d28944', '&:hover': {bgcolor: '#b36b2e'}}}>
                            Жіберу
                        </Button>

                    </Box>
                </Modal>
            </div>

        </Box>

    );
};

export default ClientBlock;
