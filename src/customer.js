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
    },[])


    return <div>


            <tr style={{border:"1px solid black", height: "3px", width: "100%" }} >
        <td style={{ height: "1px", width: "130px", "borderCollapse": "collapse" }}>{props.props.firstName}</td>
        <td style={{ height: "1px", width: "130px", "borderCollapse": "collapse" }}>{
                    rows.map(item => {
                        return <tr style={{ borderRight: "1px solid black", borderBottom: "1px solid black", width: "100%" }}>{item.name}
                        <td style={{ height: "1px", width: "130px", "borderCollapse": "collapse" }}>{
                    
                        item.date.map(x => {
                            return <div>{x}</div>
                        })
                    
                }</td></tr>
                    })
                }</td>
        
            </tr>
    </div>
}

export default CustomerComp;