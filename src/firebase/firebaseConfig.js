import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc, addDoc, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4jsO5layVVQacJSa3RRInEoMgQ-bekuM",
  authDomain: "dejaburg-afce2.firebaseapp.com",
  projectId: "dejaburg-afce2",
  storageBucket: "dejaburg-afce2.appspot.com",
  messagingSenderId: "148329449131",
  appId: "1:148329449131:web:edddf1eba4a520440ad9ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize cloud Firestore
export const db = getFirestore(app);


// Función para agregar los pedidos a firebase
const createOrder = async (tableNumber, id, productList) => {
  const saveOrder = await addDoc(collection(db, "commands"), {
    orderId: id,
    table: tableNumber,
    product: productList,
  });
  console.log("Visualizando la data", saveOrder);
}

export { createOrder }





