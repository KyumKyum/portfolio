import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/landingPage/LandingPage';
import MoheyPage from '../pages/moheyPage/MoheyPage';
import HolmePage from '../pages/holmePage/HolmePage';
import ShieldBidPage from '../pages/shieldBidPage/ShieldBidPage';

function RootRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/mohey" element={<MoheyPage />} />
                <Route path="/holme" element={<HolmePage />} />
                <Route path="/shieldbid" element={<ShieldBidPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RootRouter;
