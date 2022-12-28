import { createRoot } from 'react-dom/client';
import { createRoutes } from './routes';
import configureAppStore from './store';

const root = createRoot(document.getElementById('root'));
root.render(createRoutes(configureAppStore()));
