import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Dashboard } from "../Dashboard/dashboard";
import { MainPage } from "../pages/Main";
export function RouterPage() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/dashboard" element={<Dashboard/>} />
                </Routes>
            </Router>
        </>
    )
}