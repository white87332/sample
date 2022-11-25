import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../css/global.css';

const Index = lazy(() => import('./pages/index/index'));

export function createRoutes()
{
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Index />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </React.StrictMode>
    );
}
