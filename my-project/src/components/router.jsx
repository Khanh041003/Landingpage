import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Dashboard } from "../Dashboard/dashboard";
import { MainPage } from "../pages/Main";
import { Ecosystem } from "../Ecosystem/eco";
import { ExplorePage } from "../Explore/explore";
export function RouterPage() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/dashboard" element={<Dashboard/>} />
                    <Route path="/ecosystem" element={<Ecosystem/>}/>
                    <Route path="/explore" element={<ExplorePage/>}/>
                </Routes>
            </Router>
        </>
    )
}