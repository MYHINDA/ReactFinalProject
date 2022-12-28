import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CustomerComp from "./customer";


function CustomersPage() {

    const store = useSelector(state => state)


    return <div>
        <h2>customers Page</h2>
        <div style={{ border: "3px solid red", float: "left", height: "300px", padding:"5px" }}>
            <h4>Region 1</h4>
            <table border={"1px"} >
                {
                    store.customers.map(item => {
                        return <body key={item.id}>
                                 <CustomerComp props={item} />                                
                        </body>
                    })
                }
            </table>


        </div>

        <div style={{ border: "3px solid green", float: "right", width: "300px" }}>
            <h4>Region 2</h4>
            {
                store.customers.map(customer =>{
                    {customer.firstName}  {customer.lastName}
                    }
                )}
        </div>
    </div>
}

export default CustomersPage;



