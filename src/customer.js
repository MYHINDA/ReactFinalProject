import { useState } from "react";
import { useSelector } from "react-redux";

function CustomerComp(props) {

    const store = useSelector(state => state)
    const [rows, setRows] = useState([{ name: "", dates: [] }])

    const data = () => {
        debugger;
        let row = { name: "", dates: [] }
        let prodDates = []
        // מערך של ההזמנות ליוזר מסוים
        let purchases = store.purchases.filter(x => x.customerId === parseInt(props.props.id))
        // מערך של מוצרים לפי מערך ההזמנות ליוזר מסוים
        let products = purchases.map(y => store.products.filter(x => y.productId === x.id)).flat()
        prodDates = Array.from(new Set(products.map(item => purchases.filter(x => x.productId === item.id )).flat())).map(d => d.date)

        // products = Array.from(new Set(products)).map(item =>
        //     prodDates = purchases.filter(x => +item.id === +x.productId).date)


        row = {
            name: products[0].name,
            dates: [prodDates]
        }
        setRows({...rows,row})
    }




    return <div>


        {/* <table style={{ border: "1px solid black" }}>
            <tr>
                <td >{props.props.firstName}</td>
                <td>{props.props.}</td>
            </tr>
        </table> */}
        <input type={"button"} value="data" onClick={data}/>


    </div>
}

export default CustomerComp;