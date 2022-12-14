import { v4 as uuidv4 } from 'uuid'

const initalValue = {
    products: [
        { id: uuidv4(), name: "PC", price: 100, quantity: 10 },
        { id: uuidv4(), name: "TV", price: 200, quantity: 5 }
    ],
    customers: [
        { id: uuidv4(), firstName: "Avi", LastName: "Cohen", city: "TLV" },
        { id: uuidv4(), firstName: "Israel", LastName: "Israeli", city: "Jerusalem" }
    ],
    purchases:[]
}

function AppReducer(state = initalValue, action) {
    
    // debugger;
    switch (action.type) {
        case "ADD_PRODUCT":
            return { ...state, products:[...state.products,action.payload] };
        case "ADD_CUSTOMER":
            return { ...state, customers: [...state.customers, action.payload] };
        case "ADD_PURCHASES":
            return {
                ...state, purchases: [...state.purchases, {
                    id: uuidv4(),
                    customerId: action.payload.customerId,
                    productId: action.payload.productId,
                    date: action.payload.date
                }]
            }
        case "EDIT_PRODUCT":
            let prod_arr1 = state.products;
            let prod_index1 = prod_arr1.findIndex(x => x.id == action.payload.id)
            if (prod_index1 >= 0)
                prod_arr1[prod_index1] = action.payload
            return { ...state, products: prod_arr1 }
        
        case "EDIT_CUSTOMER":
            let cust_arr1 = state.customers;
            let cust_index1 = cust_arr1.findIndex(x => x.id == action.payload.id)
            if (cust_index1 >= 0)
                cust_arr1[cust_index1] = action.payload
            return { ...state, customers: cust_arr1 }
        
        case "EDIT_PURCHASES":
            let pur_arr1 = state.purchases;
            let pur_index1 = pur_arr1.findIndex(x => x.id == action.payload.id)
            if (pur_index1 >= 0)
                pur_arr1[pur_index1] = action.payload
            return { ...state, purchases: pur_arr1 }
            
        case "DELETE_PRODUCT":
            let prod_arr = state.products;
            let prod_index = prod_arr.findIndex(x => x.id == action.payload.id)
            if (prod_index >= 0)
                prod_arr.splice(prod_index, 1)
            return { ...state, products: prod_arr };

        case "DELETE_CUSTOMER":
            let cust_arr = state.customers;
            let cust_index = cust_arr.findIndex(x => x.id == action.payload.id)
            if (cust_index >= 0)
                cust_arr.splice(cust_index, 1)
            return { ...state, customers: cust_arr };
        
        case "DELETE_PURCHASES":
            let pur_arr = state.customers;
            let pur_index = pur_arr.findIndex(x => x.id == action.payload.id)
            if (pur_index >= 0)
                pur_arr.splice(pur_index, 1)
            return { ...state, customers: pur_arr };
        
        default:
            return state;
    }
}


export default AppReducer;