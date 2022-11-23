import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, addDoc } from "firebase/firestore";

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


// Función para agregar pedidos a firebase
const createOrder = async (posting) => {
  const docRef = await addDoc(collection(db, "Post"), {
    description: posting,
    uid: auth.currentUser.uid,
    name: auth.currentUser.displayName,
  });
  document.getElementById("inputPost").value = "";
  console.log("Document written with ID: ", docRef.id);
};


export const createOrder = async (customerName, totalPrice, tableNumber, cartItems) => {
  try {
    const docRef = await addDoc(collection(db, "order"), {
      items: cartItems,
      totalPrice: totalPrice,
      customer: customerName,
      tableNumber: tableNumber,
    });
    return docRef
    // console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};