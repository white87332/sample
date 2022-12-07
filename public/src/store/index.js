import { configureStore } from '@reduxjs/toolkit';
import counter from './counter';

export default function configureAppStore(preloadedState) {
    const store = configureStore({
        reducer: {
            counter
        },
        preloadedState,
    });

    // if (process.env.NODE_ENV !== 'production' && module.hot) {
    //     module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
    // }

    return store;
}
