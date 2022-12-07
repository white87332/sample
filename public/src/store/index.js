import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterReducer';

export default function configureAppStore(preloadedState)
{
    const store = configureStore({
        reducer: {
            counter: counterReducer
        },
        preloadedState,
    });

    // if (process.env.NODE_ENV !== 'production' && module.hot) {
    //     module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
    // }

    return store;
}
