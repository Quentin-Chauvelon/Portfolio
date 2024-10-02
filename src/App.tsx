import { Route, BrowserRouter, Routes } from "react-router-dom"

import Scene from "./pages/Scene";
import About from "./pages/About";
import Experience from "./pages/Experience";

import "./App.css"


function App() {
    return (
        <>
            <BrowserRouter>
                <Scene />
                <section className="relative overflow-auto overflow-x-hidden bg-[--bg-color] text-[--color]">
                    <Routes>
                        <Route
                            path="/"
                            element={<></>}
                        />
                        <Route
                            path="/about"
                            element={<About />}
                        />
                        <Route
                            path="/experience"
                            element={<Experience />}
                        />
                        <Route
                            path="*"
                            element={'Not Found'}
                        />
                    </Routes>
                </section>
            </BrowserRouter >
        </>
    )
}

export default App
