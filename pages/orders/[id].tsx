import { CartList, OrderSummary } from "../../components/cart"
import { Card, CardContent, Grid, Typography, Divider, Box, Link, Chip } from "@mui/material"
import { ShopLayout } from "../../components/layouts"
import NextLink from 'next/link'
import { CreditCardOutlined, CreditScoreOutlined } from "@mui/icons-material"

const OrderPage = () => {
    return (
        <ShopLayout title='Resumen de la orden 283732947' pageDescription="resumen de la orden">
            <Typography variant='h1' component='h1'>Orden abc123 </Typography>

            {/* <Chip
                sx={{ my: 2 }}
                label="Pendiente de pago"
                variant="outlined"
                color="error"
                icon={<CreditCardOutlined />}
            /> */}
            <Chip
                sx={{ my: 2 }}
                label="Orden ya fue pagada"
                variant="outlined"
                color="success"
                icon={<CreditScoreOutlined />}
            />

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
                                {/* TODO */}
                                <h1>Pagar</h1>
                                <Chip
                                    sx={{ my: 2 }}
                                    label="Orden ya fue pagada"
                                    variant="outlined"
                                    color="success"
                                    icon={<CreditScoreOutlined />}
                                />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </ShopLayout>
    )
}

export default OrderPage