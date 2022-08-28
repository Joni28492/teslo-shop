import { Typography, Grid, Chip, Link } from "@mui/material";
import { ShopLayout } from "../../components/layouts";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import NextLink from 'next/link';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'fullName', headerName: 'Nombre Completo', width: 300 },

    {
        field: 'paid',
        headerName: 'Pagada',
        description: 'Muestra infrmacion si esta pagada la orden o no',
        width: 200,
        renderCell: (params: GridValueGetterParams) => {
            return (
                params.row.paid
                    ? <Chip color="success" label="Pagada" variant="outlined" />
                    : <Chip color="error" label="No pagada" variant="outlined" />
            )
        }
    },

    {
        field: 'orden', headerName: 'Ver Orden', width: 200,
        sortable: false,
        renderCell: (params: GridValueGetterParams) => {
            return (
                <NextLink href={`/orders/${params.row.id}`} passHref>
                    <Link underline='always'>
                        ver Orden
                    </Link>
                </NextLink>
            )
        }

    }
]

const rows = [
    { id: 1, paid: true, fullName: 'Joni Fernandez' },
    { id: 2, paid: false, fullName: 'Melissa Flores' },
    { id: 3, paid: true, fullName: 'Hernando Vallejo' },
    { id: 4, paid: false, fullName: 'Emin Reyes' },
    { id: 5, paid: true, fullName: 'Eduardo Rios' },
    { id: 6, paid: true, fullName: 'Natalia Herrera' },
]


const HistoryPage = () => {
    return (
        <ShopLayout title="Historial de ordenes" pageDescription="Historial de ordenes del cliente">
            <Typography variant='h1' component='h1'>Historial de ordenes</Typography>
            <Grid container>
                <Grid item xs={12} sx={{ height: 150, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                        autoHeight
                    />
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default HistoryPage