import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link,Outlet } from "react-router-dom";

function ProductComp(props) {
    // debugger;
    const store = useSelector(state=>state)

    const [customer, setCustomer] = useState([])

    useEffect(() => {

        let arr = store.purchases.filter(x => x.productId === props.props.id).map(x => x.customerId)

        let temp = []

        for (let i = 0; i < arr.length; i++) {
            temp.push(store.customers.filter(x => x.id == arr[i]))
        }
        temp = temp.flat()


        setCustomer([...customer, temp].flat())
    }, [])


    return <div style={{border:"2px solid black", margin:"5px"}}>
        
        <h2>Product</h2>
        Name:<Link to={"/editproduct/"+props.props.id}> {props.props.name}</Link> <br />
        
        price: {props.props.price}<br />
        Quantity: {props.props.quantity}<br /><br />
        <Outlet />

        <div>
            {
                customer.map(item => {
                return <div key={item.id}>
                    <Link to={"/editcustomer/" + item.id}><h3>{item.firstName} {item.lastName}</h3> </Link> <br />
                
                <ul>
                    <li>{item.city }</li>
                </ul>
                </div>
            })
            }
        </div>
        
    </div>
}

export default ProductComp;