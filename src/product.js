import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProductComp(props) {

    const store = useSelector(state => state)

    const dispatch = useDispatch()

    const [customers, setCustomers] = useState([])

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

        let tempArr = []

        let items =[]


        for (let i = 0; i < cusIdArr.length; i++) {
            items.push(store.customers.filter(x => x.id === cusIdArr[i]))
        }
        items = items.flat()

        items.map(item=>{
            tempArr.push({...item, showCombo:false})
        })

        for (let i = 0; i < tempArr.length; i++) {
            tempArr[i] = {
                ...tempArr[i],
                date: purArr.filter(x => x.customerId === tempArr[i].id).map(p => p.date)
            }
            tempArr[i].date = new Set(tempArr[i].date)
            tempArr[i].date = Array.from(tempArr[i].date)
        }
        tempArr = tempArr.flat()


        setCustomers([tempArr].flat())
       
    },[])

    const addPurchas = (e, item) => {
        setSaveProd(!saveProd)
        setPurchas({ ...purchas, productId: store.products.find(x => x.name === e).id, customerId: item.id })
    }
    const save = (item) => {

        dispatch({ type: "ADD_PURCHASES", payload: purchas })
        setSaveProd(false)
        setComboProd(false)

        item.showCombo = false
    }

    const showCustomerCombo = (item) => {
        item.showCombo = true
        setComboProd(!comboProd)

    }



    return <div class="card" style={{ border: "2px solid black", margin: "5px" }}>

        <br />
        <h2 class="total_purchases">product card</h2>

        <hindy class="details">
        Name:<Link to={"/editproduct/" + props.props.id}> {props.props.name}</Link> <br />
        price: {props.props.price}<br />
        Quantity: {props.props.quantity}<br /><br />
        </hindy>

        < div >
            {
                customers.map(item => {
                    return <div key={item.id}>
                        <Link to={"/editcustomer/" + item.id}><h3 class="total_purchases" style={{fontSize:"30px"}}>{item.firstName} {item.lastName}</h3> </Link> 

                        <hodaya class="product_details">
                            City: {item.city}
                            <br/><br/>
                            Date: {
                                item.date.map(d => {
                                    return <li>{d}</li>
                                })
                            }
                            
                        </hodaya>
                        <br/>
                        <Button class="l_button" onClick={() => showCustomerCombo(item)}>ADD</Button><br/>
                        <br/>
                        {
                            item.showCombo &&
                            <select class="select_item" name="products" value="select" onChange={(e) => addPurchas(e.target.value, item)}>
                                <option>Choose your item</option>
                                    {
                                        store.products.map(item =>
                                    <option>{item.name}</option>
                                )}
                            </select>
                        }
                        {
                            saveProd &&
                            <input type={"button"} class="small_button" value="save" onClick={()=>save(item)} />
                        }
                    </div>
                })
            }
        </div>

    </div>
}

export default ProductComp;