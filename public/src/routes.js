import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../css/global.css';

const Index = lazy(() => import('./pages/index/index'));
const ReduxToolkit = lazy(() => import('./pages/reduxToolkit/reduxToolkit'));
const MouseTracker = lazy(() => import('./pages/renderProps/mouseTracker'));

export function createRoutes(store)
{
    return (
        <React.StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path="/" element={<Index />} />
                            <Route path="/reduxToolkit" element={<ReduxToolkit />} />
                            <Route path="/renderProps" element={<MouseTracker />} />
                        </Routes>
                    </Suspense>
                </BrowserRouter>
            </Provider>
        </React.StrictMode>
    );
}
