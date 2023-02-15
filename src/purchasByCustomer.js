import { Button } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


function PurchasByCustomerPage(props) {

    const store = useSelector(state => state)

    const dispatch = useDispatch()

    const [saveProd, setSaveProd] = useState(false)

    var timeNow = new Date();
    var israeliDate = timeNow.getDate() + '/' + (timeNow.getMonth() + 1) + '/' + timeNow.getFullYear();

    const [purchas, setPurchas] = useState({ customerId: 0, productId: 0, date: israeliDate })

    const addPurchas = (e) => {
        setSaveProd(true)
        setPurchas({ ...purchas, productId: store.products.find(x => x.name === e).id, customerId: props.props.id })
    }

    const save = () => {

        dispatch({ type: "ADD_PURCHASES", payload: purchas })
        debugger
        setSaveProd(false)
        props.props.showCombo = false
    }

    const cancle = () => {

        debugger;
        setSaveProd(false)
        props.props.showCombo = false
    }


    return <div>
        {
            
            <select name="products" class="select_item" value="select" onChange={(e) => addPurchas(e.target.value)}>
                <option class="select_item">Choose your item</option>
                {
                    store.products.map(item =>
                        <option>{item.name}</option>
                    )}
            </select>
            
           
        }
        <br/>
        {/* <Button class="small_button" onClick={cancle}>cancle</Button> */}
        {
            saveProd && <Button class="small_button" onClick={save}>save</Button>
        }
    </div>
}

export default PurchasByCustomerPage;