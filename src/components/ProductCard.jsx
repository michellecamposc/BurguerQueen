import styles from '../styles/TakeOrder.module.css';
import { BsPlusCircleFill } from 'react-icons/bs';
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';

// Tarjeta para desayuno, para tomar y agregrados
export const ProductCard = ({ item }) => {
	const { name, price, description, image } = item;
	const { addedProduct, setAddedProduct } = useContext(MyContext);

	// Function to add products to cart
	const addItem = () => setAddedProduct([...addedProduct, { name, price }]);
	return (
		<section className={styles.productCard}>
			<div className={styles.imageAndButtonContainer}>
				<section className={styles.imageContainer}>
					<img src={image} alt={'menu'} />
				</section>
				<section className={styles.addButton}>
					<BsPlusCircleFill
						size={'2em'}
						color={'#4D4D4D'}
						onClick={(event) => addItem()}
					/>
				</section>
			</div>
			<article id={styles.productInformation}>
				<h1>{name}</h1>
				<p>{description}</p>
				<h3>${price + 'clp'}</h3>
			</article>
		</section>
	);
};
