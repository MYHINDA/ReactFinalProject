import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CustomerComp from "./customer";
import PurchasByCustomerPage from "./purchasByCustomer";


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
        <div style={{float: "left", width:"45%"}}>
            {
                true && <table border={"1px"} style={{width:"100%",padding:"20px", margin:"20px"}}>
                    {
                        store.customers.map(item => {
                            return <body key={item.id}>
                                <CustomerComp props={item} />
                            </body>
                        })
                    }
                </table>
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



