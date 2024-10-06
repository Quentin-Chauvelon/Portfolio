import { Route, BrowserRouter, Routes } from "react-router-dom"

import Scene from "./pages/Scene";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Certifications from "./pages/Certifications";
import PersonalProjects from "./pages/PersonalProjects";
import AcademicProjects from "./pages/AcademicProjects";

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
                            path="/resume"
                            element={<Resume />}
                        />
                        <Route
                            path="/experience"
                            element={<Experience />}
                        />
                        <Route
                            path="/education"
                            element={<Education />}
                        />
                        <Route
                            path="/certifications"
                            element={<Certifications />}
                        />
                        <Route
                            path="/personal-projects"
                            element={<PersonalProjects />}
                        />
                        <Route
                            path="/academic-projects"
                            element={<AcademicProjects />}
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
