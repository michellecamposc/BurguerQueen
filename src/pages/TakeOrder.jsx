import { FirstBillSection, ProductCards } from '../components/BillSection';
import { ProductCard } from '../components/ProductCard';
import { NavBar } from '../components/NavBar';
import { SelectTable } from '../components/SelectTable';
import { MenuOptions } from '../components/MenuOptions';
import { SendOrderButton } from '../components/SendOrderButton';
import styles from '../styles/TakeOrder.module.css';
import menu from '../data/menu.json';
import { MyContext } from '../context/MyContext';
import { useContext } from 'react';

export const TakeOrder = () => {
	const { selectedCategory, addedProduct, setAddedProduct } =
		useContext(MyContext);
	return (
		<div id={styles.orderContainer}>
			<div>
				<NavBar />
			</div>
			<div id={styles.menuContainer}>
				<section id={styles.productsContainer}>
					<SelectTable />
					<MenuOptions />
					<div id={styles.justCardProducts}>
						{menu.products
							?.filter((p) => p.categoryId === selectedCategory.id)
							?.map((item, index) => (
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
						<FirstBillSection />
					</div>
					<div id={styles.addedProducts}>
						<div id={styles.addedProducts}>
							{addedProduct.map((item, index) => (
								<ProductCards
									key={index}
									item={item}
									addedProduct={addedProduct}
								/>
							))}
						</div>
					</div>
					<div id={styles.totalContainer}>
						<SendOrderButton />
					</div>
				</section>
			</div>
		</div>
	);
};
