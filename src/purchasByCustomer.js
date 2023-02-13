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
<<<<<<< HEAD
        setSaveProd(true)
=======
        setSaveProd(!saveProd)
>>>>>>> 835fba4b5873ebd5e01db4bb9dde4a16aa5634fc
        setPurchas({ ...purchas, productId: store.products.find(x => x.name === e).id, customerId: props.props.id })
    }

    const save = () => {

        dispatch({ type: "ADD_PURCHASES", payload: purchas })
<<<<<<< HEAD
        debugger
        setSaveProd(false)
        props.props.showCombo = false
    }

    const cancle = () => {

        debugger;
        setSaveProd(false)
=======
        setSaveProd(false)
        // debugger;
>>>>>>> 835fba4b5873ebd5e01db4bb9dde4a16aa5634fc
        props.props.showCombo = false
    }


    return <div>
        {
<<<<<<< HEAD
            
            <select name="products" class="select_product" value="select" onChange={(e) => addPurchas(e.target.value)}>
                <option class="select_product">Choose your item</option>
=======
            <select name="products" value="select" onChange={(e) => addPurchas(e.target.value)}>
                <option>Choose your item</option>
>>>>>>> 835fba4b5873ebd5e01db4bb9dde4a16aa5634fc
                {
                    store.products.map(item =>
                        <option>{item.name}</option>
                    )}
            </select>
<<<<<<< HEAD
            
           
        }
        <br/>
        {/* <Button class="small_button" onClick={cancle}>cancle</Button> */}
        {
            saveProd && <Button class="small_button" onClick={save}>save</Button>
=======

        }
        {
            saveProd && <Button variant="contained" onClick={save}>save</Button>
>>>>>>> 835fba4b5873ebd5e01db4bb9dde4a16aa5634fc
        }
    </div>
}

export default PurchasByCustomerPage;