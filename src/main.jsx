import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter.jsx';
import './styles/style.css';
import { MyContextProvider } from './context/MyContext';

ReactDOM.createRoot(document.getElementById('root')).render(
	<MyContextProvider>
		<BrowserRouter>
			<AppRouter />
		</BrowserRouter>
	</MyContextProvider>
);
