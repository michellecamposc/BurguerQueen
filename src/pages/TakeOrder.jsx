import {
	CartProducts,
	FirstBillSection,
	SendOrderButton,
} from '../components/BillSection';
import { LunchCard, ProductCard } from '../components/ProductCard';
import { NavBar, SelectTable, MenuOptions } from '../components/NavBar';
import styles from '../styles/TakeOrder.module.css';
import menu from '../data/menu.json';
import { useState } from 'react';

export const TakeOrder = () => {
	// Estado para seleccionar la mesa
	const [selectedTable, setSelectedTable] = useState('');

	//  Estado para añadir productos al carrito
	const [addedProduct, setAddedProduct] = useState([]);
	// const [addedLunchProduct, setAddedLunchProduct] = useState([]);

	return (
		<div id={styles.orderContainer}>
			<div id={styles.navContainer}>
				<NavBar />
			</div>
			<div id={styles.menuContainer}>
				<section id={styles.productsContainer}>
					<SelectTable setSelectedTable={setSelectedTable} />
					<MenuOptions />

					<div id={styles.justCardProducts}>
						{menu.Breakfast.map((item, index) => (
							<ProductCard
								key={index}
								item={item}
								setAddedProduct={setAddedProduct}
								addedProduct={addedProduct}
							/>
						))}
						{menu.Lunch.map((item, index) => (
							<LunchCard
								key={index}
								item={item}
								setAddedProduct={setAddedProduct}
								addedProduct={addedProduct}
							/>
						))}
						{menu.Accompaniments.map((item, index) => (
							<ProductCard
								key={index}
								item={item}
								setAddedProduct={setAddedProduct}
								addedProduct={addedProduct}
							/>
						))}
						{menu.Beverages.map((item, index) => (
							<ProductCard
								key={index}
								item={item}
								setAddedProduct={setAddedProduct}
								addedProduct={addedProduct}
							/>
						))}
					</div>
				</section>
				<section id={styles.billContainer}>
					<div id={styles.tableSectionContainer}>
						<FirstBillSection selectedTable={selectedTable} />
					</div>
					<div id={styles.addedProducts}>
						{addedProduct.map((item, index) => (
							<CartProducts key={index} addedProduct={item} />
						))}
					</div>
					<div id={styles.totalContainer}>
						<SendOrderButton />
					</div>
				</section>
			</div>
		</div>
	);
};
