import { useForm, ValidationError } from '@formspree/react';
import { Container, Typography, Box, TextField, Button, Paper } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  // Replace "YOUR_FORM_ID" with your actual Formspree form ID
  const [state, handleSubmit] = useForm("movbegwg");



  return (
    <Container maxWidth="md" id="contact" sx={{ py: 8 }}>
      <Typography 
        variant="h4" 
        component="h2" 
        gutterBottom 
        align="center" 
        sx={{ 
          mb: 6,
          fontWeight: 600,
          fontFamily: '"Courier New", Courier, monospace',
        }}
      >
        Contact Me
      </Typography>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        {state.succeeded ? (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 4 }}>
                <Typography 
                    variant="h5"
                    align="center"
                    sx={{
                        fontFamily: '"Courier New", Courier, monospace',
                    }}
                >   
                    <p>Thanks for reaching out! </p>
                    <p>I'll get back to you as soon as possible.</p>
                </Typography>
            </Box>
        ) : (
            <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
            >
            <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
            />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="message"
                label="Message"
                id="message"
                multiline
                rows={4}
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                endIcon={<SendIcon />}
                disabled={state.submitting}
                sx={{ mt: 3, mb: 2 }}
            >
                Send Message
            </Button>
        </Box>
        )}
      </Paper>
    </Container>
  );
};

export default Contact;
