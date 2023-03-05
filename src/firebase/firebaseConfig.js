import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, getDocs, deleteDoc, doc } from "firebase/firestore";

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
const newOrder = async (addedProducts, selectedTable, clearCartWhenSendOrder, clearSelectedTable) => {
  try {
    const orderCollectionRef = collection(db, "order");
    const orderData = {
      mesa: selectedTable,
      productos: addedProducts.map((addedProduct) => ({
        nombre: addedProduct.name,
        precio: addedProduct.price,
      })),
    };
    const docRef = await addDoc(orderCollectionRef, orderData);
    console.log("Orden creada correctamente con el ID:", docRef.id);
    // Clear container when you send the new order
    clearCartWhenSendOrder();
    clearSelectedTable();

    return docRef.id; // return the document id
  } catch (e) {
    console.error("Error al crear la orden: ", e);
  }
};


// Get data from firestore to print the information in the kitchen
const getOrders = async () => {
  const ordersCollectionRef = collection(db, "order");
  const ordersSnapshot = await getDocs(ordersCollectionRef);
  const orders = ordersSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return orders;
};


// Remove order in the kitchen and firestore
const deleteOrder = async (orderId) => {
  try {
    await deleteDoc(doc(db, 'order', orderId));
    console.log(`Pedido ${orderId} eliminado correctamente`);
  } catch (error) {
    console.error('Error al eliminar el pedido:', error);
  }
};

export { newOrder, getOrders, db, deleteOrder };

