import { Grid, Box, Typography, Button, Chip } from "@mui/material";
import { NextPage, GetServerSideProps, GetStaticProps, GetStaticPaths } from "next";
import { ShopLayout } from "../../components/layouts"

import { ProductSlideShow, SizeSelector } from "../../components/product";
import { ItemCounter } from "../../components/ui";
import { dbProducts } from "../../database";
import { IProduct } from "../../interfaces";



interface Props {
    product: IProduct
}

const ProductPage: NextPage<Props> = ({ product }) => {

    // const router = useRouter();
    // const { products: product, isLoading } = useProducts(`/products/${router.query.slug}`);



    return (
        <ShopLayout title={product.title} pageDescription={product.description}>
            <Grid container spacing={3} >
                <Grid item xs={12} sm={7}>
                    {/* slideShow */}
                    <ProductSlideShow
                        images={product.images}
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Box display='flex' flexDirection='column' >
                        {/* titulos */}
                        <Typography variant='h1' component='h1'>{product.title}</Typography>
                        <Typography variant='subtitle1' component='h2'>{`$${product.price}`}</Typography>
                        {/* cantidad */}

                        <Box sx={{ my: 2 }}>
                            <Typography variant='subtitle2'>Cantidad</Typography>
                            <ItemCounter />
                            <SizeSelector
                                selectedSize={product.sizes[2]}
                                sizes={product.sizes}
                            />
                        </Box>

                        {/* Agregar al carrito */}
                        <Button color='secondary' className='circular-btn'>
                            Agregar al carrito
                        </Button>

                        {/* <Chip label='No hay disponibles' color="error" variant="outlined" /> */}
                        {/* descripcion */}
                        <Box sx={{ mt: 3 }}>
                            <Typography variant='subtitle2'>Descripcion</Typography>
                            <Typography variant='body2'>{product.description}</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ShopLayout>
    )
}


//getServerSideProps
// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time


//* No usar esto.... SSR
// export const getServerSideProps: GetServerSideProps = async ({ params }) => {

//     const { slug = '' } = params as { slug: string };
//     const product = await dbProducts.getProductsBySlug(slug);

//     if (!product) {
//         return {
//             redirect: {
//                 destination: '/',
//                 permanent: false,
//             }
//         }
//     }

//     return {
//         props: {
//             product
//         }
//     }
// }

// getStaticPaths
//blocking
// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes


export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const productsSlugs = await dbProducts.getAllProductsSlugs();

    return {
        paths: productsSlugs.map(({ slug }) => ({
            params: { slug }
        })),
        fallback: "blocking"
    }
}

// getStaticProps
//revalidar cada 24 h



export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug = '' } = params as { slug: string };
    const product = await dbProducts.getProductsBySlug(slug);

    if (!product) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        };
    }

    return {
        props: { product },
        revalidate: 86400,//60*60*24
    }
}



export default ProductPage