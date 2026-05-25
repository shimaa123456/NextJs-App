// components/ProductCard.tsx
'use client';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import { Product } from '../types/product';

export default function ProductCard({ product }: { product: Product }) {
  const discountedPrice = (
    product.price * (1 - (product.discountPercentage || 0) / 100)
  ).toFixed(2);

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="220"
        image={product.thumbnail}
        alt={product.title}
        sx={{ objectFit: 'contain', p: 2 }}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" fontWeight="bold">
          {product.title}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {product.description.substring(0, 85)}...
        </Typography>

        <Typography variant="h6" color="primary">
          {Number(discountedPrice)} EGP
        </Typography>

        {product.discountPercentage && (
          <Typography variant="body2" color="error" sx={{ textDecoration: 'line-through' }}>
            {product.price} EGP
          </Typography>
        )}

        <Typography variant="caption" display="block" sx={{ mt: 1 }}>
          ⭐ {product.rating} | {product.stock} in stock
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" variant="contained" fullWidth>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}