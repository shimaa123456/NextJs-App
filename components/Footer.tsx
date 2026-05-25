// components/Footer.tsx
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#f5f5f5', py: 4, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} My Store. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
}