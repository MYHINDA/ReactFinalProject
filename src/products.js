import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComp from "./product";

function ProductsPage() {

    // debugger;
    const [product, setProduct] = useState({})
    const [showAddProduct, setShowAddProduct] = useState(false)

    const store = useSelector(state => state);

    const dispatch = useDispatch()

    const addProduct = () =>
    {
        dispatch({ type: "ADD_PRODUCT", payload: product })
        setShowAddProduct(!showAddProduct)
        

        }
    return <div>

        <div class="card" style={{ float: "right", width: "45%", margin: "20px" }}>
            <h2>Add Product</h2>
            <button class="l_button" onClick={setShowAddProduct(true)}>ADD</button>

            
            {
                showAddProduct && <form class="details" onSubmit={()=>addProduct()} style={{ float: "left", margin: "15px" }}>


                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="id" variant="outlined" onChange={(e) => setProduct({ ...product, id: e.target.value })} style={{ fontSize: "20px" }} /><br /><br />
                    <TextField id="outlined-basic" label="name" variant="outlined" onChange={(e) => setProduct({ ...product, name: e.target.value })} style={{ fontSize: "20px" }} /><br /><br />
                    <TextField id="outlined-basic" label="price" variant="outlined" onChange={(e) => setProduct({ ...product, price: e.target.value })} style={{ fontSize: "20px" }} /><br /><br />
                    <TextField id="outlined-basic" label="quantity" variant="outlined" onChange={(e) => setProduct({ ...product, quantity: e.target.value })} style={{ fontSize: "20px" }} />
                </Box><br />
                <input class="small_button" type={"submit"} value="Add" />

                <Button class="small_button" onClick={setShowAddProduct(false)}>cancle</Button>

                <br /><br />
            </form>
            }
            
        </div>
        





        <div class="card" style={{ float: "left", width: "30%",marginTop:"3%" ,margin:"10%"}}>
            <h4 class="total_purchases">Total purchases:</h4>
            <span class="total_purchases">{store.purchases.length}</span>
            
        </div>

        <div style={{ float: "right", width: "45%", margin: "20px" }}>
            {
                store.products.map(item =>
                    <ProductComp props={item} key={item.id} />
            )}
        </div>

    </div>
}

export default ProductsPage;