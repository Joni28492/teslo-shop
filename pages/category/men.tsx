import { Typography } from '@mui/material';
import React from 'react'
import { ShopLayout } from '../../components/layouts';
import { ProductList } from '../../components/product';
import { FullScreenLoading } from '../../components/ui';
import { useProducts } from '../../hooks';

const MenPage = () => {

    const { products, isLoading } = useProducts('/products?gender=men');

    return (
        <ShopLayout title={'Teslo-Shop - men'} pageDescription={'Encuentra productos de Teslo para hombres'}>
            <Typography variant='h1' component='h1'>Hombres</Typography>
            <Typography variant='h2' sx={{ mb: 1 }}>Productos para ellos</Typography>

            {
                isLoading
                    ? <FullScreenLoading />
                    : <ProductList products={products} />
            }
        </ShopLayout>
    )
}

export default MenPage