import { Link,Outlet } from "react-router-dom";

function ProductComp(props) {
    debugger;
    return <div style={{border:"2px solid black", margin:"5px"}}>
        
        <h2>Product</h2>
        Name:<Link to="editproduct"> {props.props.name}</Link> <br />
        
        price: {props.props.price}<br />
        Quantity: {props.props.quantity}<br /><br />
        <Outlet />
        
    </div>
}

export default ProductComp;