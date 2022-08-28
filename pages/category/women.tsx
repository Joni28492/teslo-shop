import { Typography } from '@mui/material';
import React from 'react'
import { ShopLayout } from '../../components/layouts';
import { ProductList } from '../../components/product';
import { FullScreenLoading } from '../../components/ui';
import { useProducts } from '../../hooks';

const WomenPage = () => {

    const { products, isLoading } = useProducts('/products?gender=women');

    return (
        <ShopLayout title={'Teslo-Shop - women'} pageDescription={'Encuentra productos de Teslo para mujeres'}>
            <Typography variant='h1' component='h1'>Mujeres</Typography>
            <Typography variant='h2' sx={{ mb: 1 }}>Productos para ellas</Typography>

            {
                isLoading
                    ? <FullScreenLoading />
                    : <ProductList products={products} />
            }
        </ShopLayout>
    )
}

export default WomenPage