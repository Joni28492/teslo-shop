import { CartList, OrderSummary } from "../../components/cart"
import { Card, CardContent, Grid, Typography, Divider, Box, Button, Link } from "@mui/material"
import { ShopLayout } from "../../components/layouts"
import NextLink from 'next/link'

const SummaryPage = () => {
    return (
        <ShopLayout title='Resumen de Orden' pageDescription="resumen de la orden">
            <Typography variant='h1' component='h1'>Resumen de la orden </Typography>
            <Grid container>
                <Grid item xs={12} sm={7}>
                    <CartList />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Card className='summary-card'>
                        <CardContent>
                            <Typography variant='h1'>Resumen (3 productos)</Typography>
                            <Divider sx={{ my: 1 }} />

                            <Box display='flex' justifyContent='space-between'>
                                <Typography variant='subtitle1'>Dirección de entrega</Typography>
                                <NextLink href='/checkout/address' passHref>
                                    <Link underline='always'>Editar</Link>
                                </NextLink>
                            </Box>

                            <Typography >Joni Fernandez</Typography>
                            <Typography >323 Algun lugar</Typography>
                            <Typography >Stittsvile, HYA 235</Typography>
                            <Typography >Canada</Typography>
                            <Typography >+34 238732842</Typography>
                            <Divider sx={{ my: 1 }} />


                            <Box display='flex' justifyContent='end'>
                                <NextLink href='/cart' passHref>
                                    <Link underline='always'>Editar</Link>
                                </NextLink>
                            </Box>

                            <OrderSummary />

                            <Box sx={{ mt: 3 }}>
                                <Button color='secondary' className='circular-btn' fullWidth>
                                    Confirmar Orden
                                </Button>
                            </Box>

                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </ShopLayout>
    )
}

export default SummaryPage