import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";

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
const db = getFirestore(app);

// Add a new order to the collection 
const newOrder = async (addedProducts) => {
  try {
    const orderCollectionRef = collection(db, "order");
    // Iterate over the array of added products and add them as documents
    addedProducts.forEach(async (addedProduct) => {
      await addDoc(orderCollectionRef, {
        producto: addedProduct.name,
        precio: addedProduct.price,
      });
    });

    console.log("Orden creada correctamente");
  } catch (e) {
    console.error("Error al crear la orden: ", e);
  }
};




export { newOrder };