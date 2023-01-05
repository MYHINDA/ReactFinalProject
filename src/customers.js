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
        <h2>customers Page</h2>
        <div style={{ border: "3px solid red", float: "left", height: "300px", padding: "5px" }}>
            <h4>Region 1</h4>
            {
                true && <table border={"1px"} >
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

        <div style={{ border: "3px solid green", float: "right", width: "300px" }}>
            <h4>Region 2</h4>
            {
                customers.map(customer => {
                    return <div>
                        <h3>{customer.firstName} {customer.lastName}</h3>
                        <input type={"button"} value="ADD" onClick={() => purchasPage(customer)} /><br /><br />

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



