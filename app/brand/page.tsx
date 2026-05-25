// app/brand/page.tsx
'use client';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { useEffect, useState } from 'react';

interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export default function BrandPage() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const res = await fetch('https://ecommerce.routemisr.com/api/v1/brands');
        if (!res.ok) throw new Error('Failed to fetch brands');
        
        const data = await res.json();
        setBrands(data.data || []);
      } catch (err) {
        setError('Failed to load brands. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, []);

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h5">Loading Brands...</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
        <Typography color="error" variant="h6">{error}</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" gutterBottom align="center" sx={{ mb: 6 }}>
        Our Brands
      </Typography>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '24px',
        padding: '0 16px'
      }}>
        {brands.map((brand) => (
          <Card key={brand._id} sx={{ textAlign: 'center', height: '100%' }}>
            <CardMedia
              component="img"
              image={brand.image}
              alt={brand.name}
              sx={{ 
                height: 160, 
                width: 160, 
                objectFit: 'contain', 
                mx: 'auto',
                mt: 3,
                mb: 2 
              }}
            />
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {brand.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {brand.slug}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
}