// import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CustomerComp from "./customer";

function PurchasesPage() {

    // const params = useParams();
    const store = useSelector(state => state)

    const [data, setData] = useState({ product: store.products, customer: store.customers, date: "" })

    const [showTable, setShowTable] = useState(false)
    
    useEffect(() => {
        setShowTable(true)
    })
    
    const search = () => {
        // console.log(data)
    }

    return <div>
        <h2>Purchases Page</h2>

        
        <select name="customers" value="select" onChange={(e) => setData({...data, customer:e.target.value})}>
            <option>Choose customer</option>
            {
                store.customers.map(item =>
                    <option >{item.firstName} {item.lastName} </option>
                )
            }
        </select>
        <br /><br />
        <select name="products" value="select" onChange={(e) => setData({ ...data, product: e.target.value })}>
            <option>Choose item</option>
            {
                store.purchases.filter() .map(item =>
                    <option>{item.name}</option>
                )}
        </select>
        <br /><br />
        Date: <input type={"date"} onChange={e=>setData({...data, date:e.target.value}) } /><br /><br />
        <input type={"button"} value="SEARCH" onClick={search}/>
        

        {showTable &&
            <table border={"1px"} >
                {
                    data.customer.map(item => {
                        return <body key={item.id}>
                            <CustomerComp props={item} />
                        </body>
                    })
                }
            </table>
        }

        {
            store.purchases.filter    
        }
    </div>
}

export default PurchasesPage;