import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
    body {
        box-sizing: border-box;
    }
`;

const Index = lazy(() => import('./pages/index/index'));

export function createRoutes(store)
{
    return (
        <React.StrictMode>
                <BrowserRouter>
                    <Suspense fallback={<div>Loading...</div>}>
                        <React.Fragment>
                            <Normalize />
                            <GlobalStyle />
                            <Routes>
                                <Route path="/" element={<Index />} />
                            </Routes>
                        </React.Fragment>
                    </Suspense>
                </BrowserRouter>
        </React.StrictMode>
    );
}
