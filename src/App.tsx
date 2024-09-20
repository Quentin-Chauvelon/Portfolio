import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import "./App.css"
import Scene from "./pages/Scene";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Scene />} />
                <Route path="/about" element={'About'} />
                <Route path="*" element={'Not Found'} />
            </Routes>
        </Router>
    )
}

export default App
