import { Link } from 'react-router-dom';
import '../styles/home-page.css';

export const HomePage = () => {
	return (
		<div className='homeContainer'>
			<section className='buttonsContainer'>
				<img src='public/dejaBurgLogo.png' />
				<Link to='order'>
					<button className='orderBtn'>Tomar pedido</button>
				</Link>
				<Link to='kitchen'>
					<button className='kitchenBtn'>Cocina</button>
				</Link>
			</section>
		</div>
	);
};
