import { useSelector } from "react-redux";
import CustomerComp from "./customer";


function CustomersPage() {

    const store = useSelector(state => state)


    return <div>
        <h2>customers Page</h2>
        <div style={{ border: "3px solid red", float: "left", height: "300px", width: "300px" }}>
            <h4>Region 1</h4>
            <table style={{border:"1px solid black"}}>
                {
                    store.customers.map(item => {
                        return <body key={item.id}>
                            <tr>
                                
                                <td> <CustomerComp props={item} /> </td>
                                
                            </tr>
                        </body>
                    })
                }
            </table>


        </div>

        <div style={{ border: "3px solid green", float: "right", width: "300px" }}>
            <h4>Region 2</h4>
            {/* {
                store.products.map(item =>
                    <ProductComp props={item} key={item.id} />
                )} */}
        </div>
    </div>
}

export default CustomersPage;



