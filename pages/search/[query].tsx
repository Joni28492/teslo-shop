import { Typography, Grid, Card, CardActionArea, CardMedia } from '@mui/material';
import type { NextPage } from 'next'
import { ShopLayout } from '../../components/layouts';
import { ProductList } from '../../components/product';
import { FullScreenLoading } from '../../components/ui';
import { useProducts } from '../../hooks';

const searchPage = () => {

    const { products, isLoading } = useProducts('/search/cybertruck')
    return (
        <ShopLayout title={'Teslo-Shop - Search'} pageDescription={'Encuentra los mejores productos de Teslo aqui'}>
            <Typography variant='h1' component='h1'>Buscar Producto</Typography>
            <Typography variant='h2' sx={{ mb: 1 }}>ABC --- 123</Typography>

            {
                isLoading
                    ? <FullScreenLoading />
                    : <ProductList products={products} />
            }



        </ShopLayout>
    )
}

export default searchPage