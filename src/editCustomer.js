import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";


function EditCustomerPage() {
    // debugger;
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const params = useParams();

    const [customer, setCustomer] = useState({ id: params.id, firstName: "", lastName: "", city:"" })


    const updateCustomer = () => {
        dispatch({ type: "EDIT_CUSTOMER", payload: customer })
        navigate("/products")
    }

    return <div>

        <h2>EditCustomerPage </h2>

        First Name: <input type="text" onChange={(e) => setCustomer({ ...customer, firstName: e.target.value })} /> <br /><br />
        Last Name: <input type="text" onChange={(e) => setCustomer({ ...customer, lastName: e.target.value })} /> <br /><br />
        City: <input type="text" onChange={(e) => setCustomer({ ...customer, city: e.target.value })} /> <br /><br />
        
        <input type={"button"} value="Update" onClick={updateCustomer} />
    </div>
}

export default EditCustomerPage;