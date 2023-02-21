import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CustomerComp from "./customer";
import PurchasByCustomerPage from "./purchasByCustomer";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function CustomersPage() {

    const store = useSelector(state => state)

    const [customers, setCustomers] = useState([])

    const [combo, setCombo] = useState(false)

    const purchasPage = (customer) => {

        customer.showCombo = true
        setCombo(!combo)
    }

    useEffect(() => {
        // debugger;
        let customer = []
        store.customers.map(item => {
            customer.push({ ...item, showCombo: false })
        })
        setCustomers([...customers, customer].flat())
        
    },[])
  

    return <div>
        <div style={{float: "left", width:"500px"}}>
            {
                // true&&
                
                <TableContainer component={Paper} style={{margin:"20px"}}>
                    <Table aria-label="simple table">
                       
                        {
                            store.customers.map(item => {
                                return <TableBody key={item.id}>
                                    <CustomerComp props={item} />
                                </TableBody>
                            })}
                            </Table>
                </TableContainer>
            }
        </div>

        <div style={{ float: "right", width: "45%", margin:"20px" }}>
            {
                customers.map(customer => {
                    return <div class="card">
                        <h3>{customer.firstName} {customer.lastName}</h3>
                        <button  class="l_button" onClick={() => purchasPage(customer)} >ADD</button><br/><br/>
                        {
                            customer.showCombo && <PurchasByCustomerPage props={customer} />
                        }
                    </div>
                }
                )}
        </div>
    </div>
}

export default CustomersPage;



