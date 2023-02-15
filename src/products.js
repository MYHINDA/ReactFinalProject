import { useSelector } from "react-redux";
import ProductComp from "./product";

function ProductsPage() {

    // debugger;
    const store = useSelector(state => state);

    return <div>
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