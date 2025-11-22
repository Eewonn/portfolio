import { useForm, ValidationError } from '@formspree/react';
import { Container, Typography, Box, TextField, Button, Paper } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  // Replace "YOUR_FORM_ID" with your actual Formspree form ID
  const [state, handleSubmit] = useForm("movbegwg");

  if (state.succeeded) {
      return (
        <Container maxWidth="sm" sx={{ py: 8, textAlign: 'center' }}>
            <Typography 
                variant="h4" 
                gutterBottom 
                color="primary"
                sx={{
                    fontWeight: 600,
                    fontFamily: '"Courier New", Courier, monospace',
                }}
            >
                Thanks for reaching out!
            </Typography>
            <Typography variant="body1">
                I'll get back to you as soon as possible.
            </Typography>
        </Container>
      );
  }

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
      </Paper>
    </Container>
  );
};

export default Contact;
