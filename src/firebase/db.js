import { collection, addDoc, getFirestore} from "firebase/firestore";
import {app} from "./config"
;
export const db = getFirestore(app)
export const createOrder = async (order)=>{
    try{
        const docRef = await addDoc(collection(db, "orders"), order)
        const orderId = docRef.id
        return orderId
    }catch(e){
        throw new Error("Error adding order document:", e)
    }
}