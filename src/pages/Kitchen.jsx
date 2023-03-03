import { CommandsCard } from '../components/CommandsCard';
import { KitchenHeader } from '../components/KitchenHeader';
import styles from '../styles/Kitchen.module.css';
import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

const useOrders = () => {
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		const ordersCollectionRef = collection(db, 'order');
		const unsubscribe = onSnapshot(ordersCollectionRef, (querySnapshot) => {
			const ordersData = querySnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setOrders(ordersData);
		});
		return unsubscribe;
	}, []);

	return orders;
};

const Kitchen = () => {
	const orders = useOrders();

	return (
		<div id={styles.kitchenContainer}>
			<section id={styles.navKitchenContainer}>
				<KitchenHeader />
			</section>
			<section id={styles.kitchenCommandsContainer}>
				{orders.map((order) => (
					<CommandsCard key={order.id} order={order} />
				))}
			</section>
		</div>
	);
};

export default Kitchen;
