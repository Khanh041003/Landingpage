import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../Dashboard/dashboard";
import { MainPage } from "../pages/Main";
import { Ecosystem } from "../Ecosystem/eco";
import { ExplorePage } from "../Explore/explore";
import { Docs } from "../Docs/Docs";
import Blog from "../Blog/Blog";

export function RouterPage() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/ecosystem" element={<Ecosystem />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/docs" element ={<Docs/>}/>
            <Route path='/blog' element={<Blog/>}/>
        </Routes>
    );
}
