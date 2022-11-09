import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { TakeOrder } from '../pages/TakeOrder';
import { KitchenPage } from '../pages/KitchenPage';

//  Router
export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/order' element={<TakeOrder />} />
				<Route path='/kitchen' element={<KitchenPage />} />
			</Routes>
		</>
	);
};
