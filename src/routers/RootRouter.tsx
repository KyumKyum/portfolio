import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/landingPage/LandingPage';
import MoheyPage from '../pages/moheyPage/MoheyPage';

function RootRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/mohey" element={<MoheyPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RootRouter;
