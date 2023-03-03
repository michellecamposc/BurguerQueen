import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { TakeOrder } from '../pages/TakeOrder';
import Kitchen from '../pages/Kitchen';

// Point of sale routes
export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/order' element={<TakeOrder />} />
				<Route path='/kitchen' element={<Kitchen />} />
			</Routes>
		</>
	);
};
