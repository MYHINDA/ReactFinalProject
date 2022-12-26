import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

function ProductComp(props) {

    const store = useSelector(state => state)

    const dispatch = useDispatch()

    const [customer, setCustomer] = useState([])

    const [comboProd, setComboProd] = useState(false)

    const [saveProd, setSaveProd] = useState(false)

    var timeNow = new Date();
    var israeliDate = timeNow.getDate() + '/' + (timeNow.getMonth() + 1) + '/' + timeNow.getFullYear();

    const [purchas, setPurchas] = useState({ customerId: 0, productId: 0, date: israeliDate })

    useEffect(() => {


        let purArr = store.purchases.filter(x => x.productId === props.props.id)
        let cusIdArr = purArr.map(x => x.customerId)
        cusIdArr = new Set(cusIdArr)
        cusIdArr = Array.from(cusIdArr)

        let temp = []

        for (let i = 0; i < cusIdArr.length; i++) {
            temp.push(store.customers.filter(x => x.id == cusIdArr[i]))
        }

        for (let i = 0; i < temp.length; i++) {
            temp[i][0] = {
                ...temp[i][0],
                date: purArr.filter(x => x.customerId === temp[i][0].id).map(p => p.date)
            }
            temp[i][0].date = new Set(temp[i][0].date)
            temp[i][0].date = Array.from(temp[i][0].date)
        }
        temp = temp.flat()


        setCustomer([...customer, temp].flat())
    }, [])

    const addPurchas = (e, item) => {
        setSaveProd(!saveProd)
        setPurchas({ ...purchas, productId: store.products.find(x => x.name === e).id, customerId: item.id })
    }
    const save = () => {
        dispatch({ type: "ADD_PURCHASES", payload: purchas })
        setSaveProd(false)
        setComboProd(false)
    }



    return <div style={{ border: "2px solid black", margin: "5px" }}>

        <h2>Product</h2>
        Name:<Link to={"/editproduct/" + props.props.id}> {props.props.name}</Link> <br />

        price: {props.props.price}<br />
        Quantity: {props.props.quantity}<br /><br />


        < div >
            {
                customer.map(item => {
                    return <div key={item.id}>
                        <Link to={"/editcustomer/" + item.id}><h3>{item.firstName} {item.lastName}</h3> </Link> <br />

                        <ul>
                            City: <li>{item.city}</li>
                            Date: <ul>{
                                item.date.map(d => {
                                    return <li>{d}</li>
                                })
                            }
                            </ul>
                        </ul>
                        <Button variant="contained" onClick={() => setComboProd(true)}>ADD</Button>
                        {/* <input type={"button"} value="ADD" onClick={() => setComboProd(true)} /> */}

                        {/* https://mui.com/material-ui/react-select/ */}
                        {
                            comboProd &&
                            <select name="products" value="select" onChange={(e) => addPurchas(e.target.value, item)}>
                                <option>Choose your item</option>
                                {store.products.map(item =>
                                    <option>{item.name}</option>
                                )}
                            </select>
                        }
                        {
                            saveProd &&
                            // <input type={"button"} value="save" onClick={save} />
                            <Button variant="contained" onClick={save}>save</Button>
                        }
                    </div>
                })
            }
        </div>

    </div>
}

export default ProductComp;