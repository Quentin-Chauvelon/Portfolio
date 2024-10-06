import SectionTitle from "../components/SectionTitle"
import { ProjectCard, ProjectCardBodyList, ProjectCardBodyParagraph } from "../components/Project"


const AcademicProjects = () => {
    return (
        <div className="min-h-[100vh]">
            <SectionTitle
                title="ACADEMIC PROJECTS"
                topMargin={"mt-24"}
            />

            <div className="flex flex-col items-center gap-8 px-6 mb-12">
                <ProjectCard
                    title="UI Widget Library"
                    date="April 2024 - May 2024"
                    duration="1 month"
                    github="https://github.com/Quentin-Chauvelon/Projet-Interface-Graphique"
                    tags={[
                        { name: "C", color: "bg-[]" },
                        { name: "CMake", color: "bg-[]" },
                    ]}
                    images={[
                        { src: "ui-widget-library/minesweeper.gif", tooltip: "Minesweeper game" },
                        { src: "ui-widget-library/2048.gif", tooltip: "2048 game" },
                        { src: "ui-widget-library/puzzle.gif", tooltip: "Puzzle game" },
                        { src: "ui-widget-library/grid.png", tooltip: "Grid geometry manager to arrange widgets in a grid" },
                        { src: "ui-widget-library/text-field.gif", tooltip: "Text field with text selection" }
                    ]}
                >
                    <>
                        <ProjectCardBodyParagraph
                            text="This project was my end of term project for my 1st year of MSc in Computer Science in a team of 3. The goal was to create a widget library in C that would allow users to create GUIs"
                            marginTop
                        />

                        <ProjectCardBodyParagraph
                            text="With this library, simple games can be created like minesweeper or 2048."
                            marginTop
                        />

                        <ProjectCardBodyList
                            listItems={[
                                "Implemented various widgets such as frames, buttons, entries, etc. that can be instantiated, configured, positioned...",
                                "Event handling system that allows the user to bind functions to events such as mouse clicks, key presses...",
                                "A grid geometry manager to arrange widgets in a grid and customize it",
                                "A parser to create GUIs from a file",
                                "Tags that can be added/removed from widgets to personalize their behavior"
                            ]}
                            marginTop
                            marginBottom
                        />
                    </>
                </ProjectCard>

                <ProjectCard
                    title="Hot Genre"
                    date="November 2022 - January 2023"
                    duration="2 months"
                    github="https://github.com/Quentin-Chauvelon/BUT2_SAE3_Site_Vente"
                    tags={[
                        { name: "PHP", color: "bg-[#7377ad]" },
                        { name: "HTML", color: "bg-[#e96228]" },
                        { name: "CSS", color: "bg-[#2862e9]" },
                        { name: "JavaScript", color: "bg-[#efd81d]" },
                        { name: "MySQL", color: "bg-[#dd8a00]" },
                        { name: "CodeIgniter", color: "bg-[#dd8a00]" },
                        { name: "UML", color: "bg-[#432d7b]" },
                    ]}
                    images={[
                        { src: "hot-genre/account-creation.gif", tooltip: "Account creation" },
                        { src: "hot-genre/add-to-cart.gif", tooltip: "Add product to cart" },
                        { src: "hot-genre/admin-products-management.gif", tooltip: "Admin products management" },
                        { src: "hot-genre/home-page.gif", tooltip: "Home page" },
                        { src: "hot-genre/order.gif", tooltip: "Order process" },
                        { src: "hot-genre/order-summary.png", tooltip: "Order summary" },
                        { src: "hot-genre/products.png", tooltip: "Product catalalog" },
                    ]}
                >
                    <>
                        <ProjectCardBodyParagraph
                            text="This project was my end of term project during my 2nd year of BSc in Computer Science in a team of 5.The goal was to create an online shopping website, from client authentification to order confirmation. It has been developed in PHP with the CodeIgniter4 framework, HTML, CSS, Javascript and a MySQL database. I implemented the following features:"
                            marginTop
                        />

                        <ProjectCardBodyList
                            listItems={[
                                "Authentification system with different roles (client, admin) + password recovery",
                                "Product catalog with categories",
                                "Product page with description, images, sizes",
                                "Favorite products",
                                "Cart and order system",
                                "Invoice generation",
                                "Vouchers",
                                "Account management (personal information, cart, addresses, orders history)",
                                "Admin dashboard to manage products, orders, clients...",
                                "Home page with best sellers, new products...",
                            ]}
                            marginBottom
                        />
                    </>
                </ProjectCard>

                <ProjectCard
                    title="Schedule Track"
                    date="April 2023 - April 2023"
                    duration="2 weeks"
                    github="https://github.com/Quentin-Chauvelon/BUT2_SAE4_API_Site_Application"
                    tags={[
                        { name: "React", color: "bg-[#61dafb]" },
                        { name: "SQLite", color: "bg-[#53a8da]" },
                        { name: "Kotlin", color: "bg-[#d75d3a]" },
                        { name: "HTML", color: "bg-[#e96228]" },
                        { name: "CSS", color: "bg-[#2862e9]" },
                        { name: "JavaScript", color: "bg-[#efd81d]" },
                        { name: "Prisma", color: "bg-[#02344c]" },
                        { name: "Hapi", color: "bg-[#74747c]" },
                        { name: "Swagger", color: "bg-[#81e32c]" },
                        { name: "Chai", color: "bg-[#f7eccb]" },
                        { name: "Vite", color: "bg-[#8e68f7]" },
                    ]}
                    images={[
                        { src: "schedule-track/schedule.gif", tooltip: "Schedule view" },
                        { src: "schedule-track/directions.gif", tooltip: "Directions synchronized with the schedule" },
                        { src: "schedule-track/rooms.gif", tooltip: "Find free rooms" },
                        { src: "schedule-track/professors.gif", tooltip: "Check a professor's availability" },
                    ]}
                >
                    <>
                        <ProjectCardBodyParagraph
                            text="This project was my end of term project during my 2nd year of BSc in Computer Science in a team of 5. The goal was to create a RESTful API, a web application and a mobile application to manage schedules:"
                            marginTop
                        />

                        <ProjectCardBodyList
                            listItems={[
                                "Schedules display in a calendar view (using the school's schedule API) + favorites",
                                "Route and departure time calculation to get to class synchronized with the schedule (using the Google Maps API)",
                                "Find free rooms at a specific time",
                                "Check a professor's availability at a specific time"
                            ]}
                        />

                        <ProjectCardBodyParagraph
                            text="The API was the core of this project as it is used by the web application and the mobile application. It has been developed with Hapi and Prisma ORM, swagger for the documentation, Chai for the tests, as well as a SQLite database. It fetches data from the school's schedule API and the Google Maps and Directions API."
                            marginTop
                        />

                        <ProjectCardBodyParagraph
                            text="The web application has been developed with React using Vite."
                            marginTop
                        />

                        <ProjectCardBodyParagraph
                            text="The mobile application has been developed with Kotlin."
                            marginTop
                            marginBottom
                        />
                    </>
                </ProjectCard>

                <ProjectCard
                    title="Particles"
                    date="December 2021 - January 2022"
                    duration="1 month"
                    github="https://github.com/Quentin-Chauvelon/BUT1_SAE1.1_Particules"
                    tags={[
                        { name: "Go", color: "bg-[#00add8]" },
                        { name: "Ebiten", color: "bg-[#d4531f]" },
                    ]}
                    images={[
                        { src: "particles/fireworks.gif", tooltip: "Fireworks" },
                        { src: "particles/corals.gif", tooltip: "Corals" },
                        { src: "particles/selection-menu.png", tooltip: "Selection menu" },
                        { src: "particles/snake.gif", tooltip: "Snake game" },
                        { src: "particles/circle.gif", tooltip: "Circle" },
                    ]}
                >
                    <>
                        <ProjectCardBodyParagraph
                            text="I worked on this project during my 1st year of BSc in Computer Science in a team of 2. This project has been developed in Go using the Ebiten library for the UI. The goal was to create scenes with particles."
                            marginTop
                        />

                        <ProjectCardBodyParagraph
                            text="The first part of this project consisted in basic configurations of particles (spawn rate, speed, size, gravity, color...)."
                            marginTop
                        />

                        <ProjectCardBodyParagraph
                            text="The second part of this project consisted in creating scenes with particles such as fireworks, a fire, etc. as well as a selection menu to navigate between the scenes."
                            marginTop
                        />

                        <ProjectCardBodyParagraph
                            text="This project is a simple version of a particles system used in games or animations."
                            marginTop
                            marginBottom
                        />
                    </>
                </ProjectCard>

                <ProjectCard
                    title="Network race"
                    date="November 2022 - December 2022"
                    duration="3 weeks"
                    github="https://github.com/Quentin-Chauvelon/BUT2_Programmation_Systeme_TD"
                    tags={[
                        { name: "Go", color: "bg-[#00add8]" },
                        { name: "Ebiten", color: "bg-[#d4531f]" },
                    ]}
                    images={[
                        { src: "network-race/players-connection.gif", tooltip: "Players connection" },
                        { src: "network-race/runner-selection.gif", tooltip: "Runner selection" },
                        { src: "network-race/race.gif", tooltip: "Race" },
                    ]}
                >
                    <>
                        <ProjectCardBodyParagraph
                            text="I worked on this project during my 2nd year of BSc in Computer Science in a team of 2. This project has been developed in Go using the Ebiten library for the UI. The goal was to create a race game that could be played over a network, using a server/client architecture."
                            marginTop
                        />

                        <ProjectCardBodyParagraph
                            text="The first part of this project was to create a working version of the game that could be played by multiple players over the same network."
                            marginTop
                        />

                        <ProjectCardBodyList
                            listItems={[
                                "The server manages the connections, game state and replicates actions from one client to the others",
                                "The client manages the UI and sends actions to the server",
                            ]}
                        />

                        <ProjectCardBodyParagraph
                            text="The second part of this project was to improve the game"
                            marginTop
                        />

                        <ProjectCardBodyList
                            listItems={[
                                "Display the number of connected players",
                                "See other players runner selection",
                                "Making sure two players can't select the same runner",
                                "..."
                            ]}
                        />
                    </>
                </ProjectCard>
            </div>
        </div>
    )
}

export default AcademicProjects