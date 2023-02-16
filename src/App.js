import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './routes/Home';
import { About } from './routes/About';
import { Greet } from './routes/Greet';
import { Me } from './routes/Me';
import { Apprenticeship } from './routes/Apprenticeship';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />}>
                    <Route path="me" element={<Me />} />
                    <Route path="apprenticeship" element={<Apprenticeship />} />
                </Route>
                <Route path="/greet/:name" element={<Greet />}/>
            </Routes>
        </BrowserRouter>
    );
}

export { App };
