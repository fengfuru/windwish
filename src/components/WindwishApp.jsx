import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import WindwishNavigation from './WindwishNavigation';
import WindwishHome from './home/WindwishHome.jsx';
import WindwishPortfolio from './portfolio/WindwishPortfolio';
import WindwishCommission from './commission/WindwishCommission';
import WindwishShop from './shop/WindwishShop';
import WindwishAbout from './about/WindwishAbout';

const basename = import.meta.env.DEV ? '/' : '/windwish';

function WindwishApp() {

    return (
        <BrowserRouter basename={basename}>
            <Routes>
                <Route path="/" element={<WindwishNavigation />}>
                    <Route index element={<WindwishHome />}/>
                    <Route path="portfolio" element={<WindwishPortfolio />}/>
                    <Route path="commission" element={<WindwishCommission />}/>
                    <Route path="shop" element={<WindwishShop />}/>
                    <Route path="about" element={<WindwishAbout />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default WindwishApp;