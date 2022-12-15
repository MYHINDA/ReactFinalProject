import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function EditProductPage() {

    const dispatch = useDispatch();

    const navigate = useNavigate();
    
    const params = useParams();

    const [product, setProduct] = useState({ id: params.id, name: "", price: 0, quantity:-1 })
    

    const updateProduct = () => {
        dispatch({ type: "EDIT_PRODUCT", payload: product })
        navigate("/products")
    }

    return <div>

        <h2>EditProduct Page</h2>

        Name: <input type="text" onChange={(e) => setProduct({ ...product, name: e.target.value })} /> <br /><br />
        Price: <input type="text" onChange={(e) => setProduct({ ...product, price: e.target.value })} /> <br /><br />
        Quantity: <input type="text" onChange={(e) => setProduct({ ...product, quantity: e.target.value })} /> <br /><br />
        <input type={"button"} value="Update" onClick={updateProduct}/>
    </div>
}

export default EditProductPage;