// import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CustomerComp from "./customer";

function PurchasesPage() {

    const store = useSelector(state => state)

    const [data, setData] = useState({ products: store.products, customer: store.customers, dates: [] })

    const [tableData, setTableData] = useState({ products: store.products, customer: store.customers, dates: [] })

    const [showTable, setShowTable] = useState(false)

    const [showSearchTable, setShowSearchTable] = useState(false)

    useEffect(() => {

        setShowTable(true)

        setData({ ...data, dates: Array.from(new Set(store.purchases.map(p => p.date).flat())) })
        setTableData({ ...tableData, dates: Array.from(new Set(store.purchases.map(p => p.date).flat())) })

    }, [])

    const comboCustomer = (val) => {

        let dates = []
        debugger;
        let fullName = val.split(" ")
        let findCustomer = store.customers.find(x => x.firstName === fullName[0] && x.lastName === fullName[1])
        let findPurchases = store.purchases.filter(x => x.customerId === +findCustomer.id)

        let products = Array.from(new Set(findPurchases.map(y => store.products.find(x => y.productId === +x.id)).flat()))

        for (let i = 0; i < products.length; i++) {
            dates.push(findPurchases.filter(x => x.productId === products[i].id).map(p => p.date))
        }
        setData({ ...data, dates, products: products, customer: findCustomer })
        setTableData({ ...tableData, dates, products: products, customer: findCustomer })
    }
    const comboProduct = (value) => {

        let findProduct = store.products.find(x => x.name === value)
        let dates = store.purchases.filter(x => x.customerId === data.customer.id && x.productId === findProduct.id).map(x => x.date)

        setData({ ...data, dates })
        setTableData({ ...tableData, dates, products: [value] })

    }

    const search = () => {

        debugger;

        setShowTable(false)

        setShowSearchTable(true)
    }

    return <div>
        <h2>Purchases Page</h2>

        <select name="customers" value="select" onChange={(e) => comboCustomer(e.target.value)}>
            <option>Choose customer</option>
            {
                store.customers.map(item =>
                    <option >{item.firstName} {item.lastName} </option>
                )
            }
        </select>
        <br /><br />
        <select name="products" value="select" onChange={(e) => comboProduct(e.target.value)}>
            <option>Choose item</option>
            {
                data.products.map(item =>
                    <option>{item.name}</option>
                )}
        </select>
        <br /><br />
        <select name="dates" value="select" onChange={(e) => setTableData({ ...tableData, dates: [e.target.value] })}>
            <option>Choose date</option>
            {
                data.dates.map(date =>
                    <option>{date}</option>
                )}
        </select>
        <br /><br />


        <input type={"button"} value="SEARCH" onClick={search} />


        {
            showTable &&
            <table border={"1px"} >
                {
                    store.customers.map(item => {
                        return <body key={item.id}>
                            <CustomerComp props={item} />
                        </body>
                    })
                }
            </table>
        }
        {
            showSearchTable &&
            <table border={"1px"}>{

                < tr >
                    <td>{tableData.customer.firstName} {tableData.customer.lastName} </td>
                    {
                        tableData.products.length === 1 && <td>{tableData.products[0]}</td>
                    }

                    {
                        tableData.products.length > 1 &&
                        <td>{
                            tableData.products.map(item => {
                                return <tr>{item.name}</tr>
                            })
                        }</td>
                    }




                    <td>{
                        tableData.dates.map(item => {
                            return <tr>{item}</tr>
                        })
                    }</td>

                </tr>
            }

            </table>
        }
    </div>
}

export default PurchasesPage;