<<<<<<< HEAD
import { useEffect, useState } from "react";
import firebase from "./firebaseApp";



function InitalValueComp() {


    const [initalValue, setInitalvalue] = useState({ products: [], customers: [], purchases: [] })

    useEffect( () => {

        const fetchData = async () => {
            
        
        let product = await firebase.firestore().collection('products').get();

        let prodData = [];
        product.forEach(doc => {
            let obj = {
                id: doc.id,
                name: doc.data().name,
                price: doc.data().price,
                quantity: doc.data().quantity
            };

            prodData.push(obj)
        })

        setInitalvalue({ ...initalValue, products: [...initalValue.products, prodData] });

        let customer = await firebase.firestore().collection('customers').get();

        let custData = [];
        customer.forEach(doc => {
            let obj = {
                id: doc.id,
                firstName: doc.data().name,
                lastName: doc.data().price,
                city: doc.data().quantity
            };

            custData.push(obj)
        })

        setInitalvalue({ ...initalValue, customers: [...initalValue.customers, custData] });




        let purchase = await firebase.firestore().collection('purchases').get();

        let purData = [];
        purchase.forEach(doc => {
            let obj = {
                id: doc.id,
                customerId: doc.data().name,
                productId: doc.data().price,
                date: doc.data().quantity
            };

            purData.push(obj)
        })

        setInitalvalue({ ...initalValue, purchases: [...initalValue.purchases, purData] });
        }

        fetchData();
    })
}

export default InitalValueComp;
=======
import { useState } from "react";
import firebase from "./firebaseApp";

async function InitalValueComp() {
    debugger;

    const [initalValue, setInitalvalue] = useState({ products: [], customers: [], purchases: [] })



    let product = await firebase.firestore().collection('products').get();

    let prodData = [];
    product.forEach(doc => {
        let obj = {
            id: doc.id,
            name: doc.data().name,
            price: doc.data().price,
            quantity: doc.data().quantity
        };

        prodData.push(obj)
    })

    setInitalvalue({ ...initalValue, products: [...initalValue.products, prodData] });




    let customer = await firebase.firestore().collection('customers').get();

    let custData = [];
    customer.forEach(doc => {
        let obj = {
            id: doc.id,
            firstName: doc.data().name,
            lastName: doc.data().price,
            city: doc.data().quantity
        };

        custData.push(obj)
    })

    setInitalvalue({ ...initalValue, customers: [...initalValue.customers, custData] });




    let purchase = await firebase.firestore().collection('purchases').get();

    let purData = [];
    purchase.forEach(doc => {
        let obj = {
            id: doc.id,
            customerId: doc.data().name,
            productId: doc.data().price,
            date: doc.data().quantity
        };

        purData.push(obj)
    })

    setInitalvalue({ ...initalValue, purchases: [...initalValue.purchases, purData] });



}

export default InitalValueComp.initalValue;
>>>>>>> 835fba4b5873ebd5e01db4bb9dde4a16aa5634fc
