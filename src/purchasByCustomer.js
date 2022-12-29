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
        setSaveProd(!saveProd)
        setPurchas({ ...purchas, productId: store.products.find(x => x.name === e).id, customerId: props.props.id })
    }

    const save = () => {
        dispatch({ type: "ADD_PURCHASES", payload: purchas })
        setSaveProd(false)
    }

    

    return <div>
        {
            <select name="products" value="select" onChange={(e) => addPurchas(e.target.value)}>
                <option>Choose your item</option>
                {
                    store.products.map(item =>
                    <option>{item.name}</option>
                )}
            </select>
            
        }
        {
            saveProd && <Button variant="contained" onClick={save}>save</Button>
        }
    </div>
}

export default PurchasByCustomerPage;