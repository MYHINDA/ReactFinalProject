import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function CustomerComp(props) {

    const store = useSelector(state => state)

    const [rows, setRows] = useState([])

    useEffect(() => {
        // debugger;
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
    }, [])


    return <div>


        <table border= "1" style={{  width:"450px"}}>
            <tr style={{ height: "1px", width: "450px" }} >
                <td style={{ height: "1px", width: "33%" }}>{props.props.firstName}</td>
                <td style={{ height: "1px", width: "33%" }}>{
                    rows.map(x => {
                        return <div>{x.name }</div>
                    })
                }</td>
                <td style={{ height: "1px", width: "33%" }}>{
                    rows.map(item => {
                        return item.date.map(x => {
                            return <div>{x}</div>
                        })
                    })
                }</td>
            </tr>
        </table>
    </div>
}

export default CustomerComp;