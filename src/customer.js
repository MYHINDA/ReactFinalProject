import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Table } from "@mui/material";


function CustomerComp(props) {

    const store = useSelector(state => state)

    const [rows, setRows] = useState([])

    useEffect(() => {
        debugger;
        let row = { name: "", dates: [] }
        let data = []

        let purchases = store.purchases.filter(x => x.customerId === parseInt(props.props.id))

        let products = Array.from(new Set(purchases.map(y => store.products.filter(x => y.productId === x.id)).flat()))

        // products = Array.from(new Set(products)).map(item =>
        //     prodDates = purchases.filter(x => +item.id === +x.productId).date)
        for (let i = 0; i < products.length; i++) {
            let dates = purchases.filter(x => x.productId === products[i].id).flat().map(d => d.date)
            row = {
                name: products[i].name,
                date: dates
            }
            data.push(row)
        }
        setRows(...rows, data)
    },[])


    return <div class="data">
        {
            <Table >
            <TableRow 
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                
                    <TableCell style={{ border: "1px solid black", width:"40%" }} component="th" scope="row">{props.props.firstName}</TableCell>
                    <TableCell align="right">
                        {
                    rows.map(item => {
                        return <TableRow style={{ borderRight:"1px solid black", borderBottom:"1px solid black", width: "100%" }}>{item.name}
                            <TableCell style={{ height: "1px", width: "130px", "borderCollapse": "collapse" }}>{

                                item.date.map(x => {
                                    return <div>{x}</div>
                                })

                            }</TableCell>
                        </TableRow>
                    })
                    }
                </TableCell>
                
                </TableRow>
            </Table>
        }

        
    </div>
}

export default CustomerComp;