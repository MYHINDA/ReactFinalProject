import { useSelector } from "react-redux";
import { Link,Outlet } from "react-router-dom";

function ProductComp(props) {
    // debugger;
    const store = useSelector(state=>state)
    return <div style={{border:"2px solid black", margin:"5px"}}>
        
        <h2>Product</h2>
        Name:<Link to={"/editproduct/"+props.props.id}> {props.props.name}</Link> <br />
        
        price: {props.props.price}<br />
        Quantity: {props.props.quantity}<br /><br />
        <Outlet />

        <div>
            {
                store.purchases.find(x => x.productId === props.props.id).map(item => {
                    return item.name
                })
                //     .map(item => {
                //     return  store.customers.find(x=>x.id === item.customerId)
                    
                // })
            }
        </div>
        
    </div>
}

export default ProductComp;