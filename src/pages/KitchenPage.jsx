import { CommandsCard } from '../components/KitchenCommandsCard';
import { KitchenHeader } from '../components/KitchenHeader';
import styles from '../styles/Kitchen.module.css';

export const KitchenPage = () => {
	return (
		<div id={styles.kitchenContainer}>
			<section id={styles.navKitchenContainer}>
				<KitchenHeader />
			</section>
			<section id={styles.kitchenCommandsContainer}>
				<CommandsCard />
				<CommandsCard />
			</section>
		</div>
	);
};
