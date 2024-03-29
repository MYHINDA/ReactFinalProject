import { v4 as uuidv4 } from 'uuid'



const initalValue = {
    products: [
        { id: 2222, name: "PC", price: 100, quantity: 10 },
        { id: 1111, name: "TV", price: 200, quantity: 5 },
        { id: 5678,     name: "CEL", price: 150, quantity: 10 }
    ],
    customers: [
        { id: 2468, firstName: "Avi",    lastName: "Levi", city: "TLV" },
        { id: 8642, firstName: "Israel", lastName: "Israeli", city: "Jerusalem" },
        { id: 1234, firstName: "Israela", lastName: "Israeli", city: "Jerusalem" },
        { id: 4321, firstName: "Aviva", lastName: "Cohen", city: "Tzfat" }
    ],
    purchases: [
        { id: uuidv4(), customerId: 1234, productId: 5678, date: "14/12/2023" },
        { id: uuidv4(), customerId: 1234, productId: 5678, date: "15/12/2023" },
        { id: uuidv4(), customerId: 4321, productId: 5678, date: "15/12/2023" },
        { id: uuidv4(), customerId: 4321, productId: 1111, date: "15/12/2023" },
        { id: uuidv4(), customerId: 1234, productId: 2222, date: "27/12/2022" },
        { id: uuidv4(), customerId: 2468, productId: 2222, date: "19/02/2023" },
        { id: uuidv4(), customerId: 2468, productId: 5678, date: "19/02/2023" }
    ]
}


function AppReducer(state = initalValue , action) {
    // debugger;
    
    switch (action.type) {
        case "LOAD_DATA":
            return { state:action.payload };
        case "ADD_PRODUCT":            

            return {
                ...state, products: [...state.products, {
                    id: parseInt(action.payload.id),
                    name: action.payload.name,
                    price: parseInt(action.payload.price),
                    quantity: parseInt(action.payload.quantity)
            } ] };
        case "ADD_CUSTOMER":
            return { ...state, customers: [...state.customers, action.payload] };
        case "ADD_PURCHASES":
            let index = state.products.findIndex(item => item.id === parseInt(action.payload.productId))
            state.products[index].quantity -= 1;
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
            let prod_index1 = prod_arr1.findIndex(x => x.id === action.payload.id)
            if (prod_index1 >= 0) {
                if (action.payload.name !== "")
                    prod_arr1[prod_index1].name = action.payload.name

                if (action.payload.price !== 0)
                    prod_arr1[prod_index1].price = action.payload.price

                if (action.payload.quantity >= 0)
                    prod_arr1[prod_index1].quantity = action.payload.quantity

            }

            return { ...state, products: prod_arr1 }
        case "EDIT_CUSTOMER":
            let cust_arr1 = state.customers;
            let cust_index1 = cust_arr1.findIndex(x => x.id === parseInt(action.payload.id))


            if (cust_index1 >= 0) {
                if (action.payload.firstName !== "")
                    cust_arr1[cust_index1].firstName = action.payload.firstName

                if (action.payload.lastName !== "")
                    cust_arr1[cust_index1].lastName = action.payload.lastName

                if (action.payload.city !== "")
                    cust_arr1[cust_index1].city = action.payload.city

            }
            return { ...state, customers: cust_arr1 }
        case "EDIT_PURCHASES":
            let pur_arr1 = state.purchases;
            let pur_index1 = pur_arr1.findIndex(x => x.id === action.payload.id)
            if (pur_index1 >= 0)
                pur_arr1[pur_index1] = action.payload
            return { ...state, purchases: pur_arr1 }
        case "DELETE_PRODUCT":
            let arr = []
            let prod_arr = state.products;
            let purchas_arr = state.purchases;
            let prod_index = prod_arr.findIndex(x => x.id === +(action.payload.id))
            if (prod_index >= 0) {
                prod_arr.splice(prod_index, 1)
                arr = purchas_arr.filter(x => x.productId !== parseInt(action.payload.id))
            }
            return { ...state, products: prod_arr, purchases: arr };

        case "DELETE_CUSTOMER":
            let arr2 = []
            let cust_arr = state.customers;
            let purchas_arr2 = state.purchases;
            let cust_index = cust_arr.findIndex(x => x.id === parseInt(action.payload.id))
            if (cust_index >= 0) {
                cust_arr.splice(cust_index, 1)
                arr2 = purchas_arr2.filter(x => x.customerId !== parseInt(action.payload.id))
            }


            return { ...state, customers: cust_arr, purchases: arr2 };

        case "DELETE_PURCHASES":
            let pur_arr = state.customers;
            let pur_index = pur_arr.findIndex(x => x.id === action.payload.id)
            if (pur_index >= 0)
                pur_arr.splice(pur_index, 1)
            return { ...state, customers: pur_arr };
        default:
            return state;
    }
}

export default AppReducer;