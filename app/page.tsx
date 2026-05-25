// app/page.tsx
'use client';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', py: 10 }}>
        <Typography variant="h2" gutterBottom>
          Welcome to My Store
        </Typography>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          Discover amazing products at great prices
        </Typography>

        <Button
          variant="contained"
          size="large"
          component={Link}
          href="/products"
          sx={{ mt: 4 }}
        >
          Shop Now
        </Button>
      </Box>
    </Container>
  );
}