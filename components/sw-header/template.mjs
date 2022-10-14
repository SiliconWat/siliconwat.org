const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-header/shadow.css">
    <header>
        <section>
            <a href="/"><img src="siliconwat.png"></a>
            <a href="/"><h1>Silicon Wat Campus</h1></a>
        </section>
        <input id="menu-toggle" type="checkbox">
        <label class='menu-button-container' for="menu-toggle">
            <span class='menu-button'></span>
        </label>
        <nav>
            <ul>
                <li>
                    <h3>For Kids</h3>
                    <div>
                        <button onclick="this.getRootNode().host.dispatch('volunteer')">Volunteer</button>
                        <h4>Coding Classes</h4>
                        <menu>
                            <li>English</li>
                            <li>Khmer</li>
                            <li>Math</li>
                        </menu>
                        <h4>Extracurricular Activities</h4>
                        <menu>
                            <li>Music Recitals</li>
                            <li>Skate Dancing</li>
                            <li>Takraw Tournaments</li>
                        </menu>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Orchards</h3>
                    <div>
                        <button>Make a Reservation</button>
                        <h4>Outdoor Group Activities</h4>
                        <menu>
                            <li>Silent Walking Meditation</li>
                            <li>Tropical Fruit Picking & Eating</li>
                            <li>Tropical Fruit Drink Mixing</li>
                        </menu>
                        <h4>Indoor Farmers' Markets</h4>
                        <menu>
                            <li>Pro Teal</li>
                            <li>Chrouy Svay</li>
                            <li>Phumi Klong</li>
                        </menu>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Dorms</h3>
                    <div>
                        <button>Book on Airbnb</button>
                        <h4>Anemities</h4>
                        <menu>
                            <li>Study Groups</li>
                            <li>Metaverse Arcade</li>
                            <li>Gondola Ferry</li>
                        </menu>
                        <h4>Housing</h4>
                        <menu>
                            <li>Plazas</li>
                            <li>Suites</li>
                            <li>Studios</li>
                        </menu>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Startup Incubator</h3>
                    <div>
                        <button onclick="this.getRootNode().host.dispatch('apply')">Apply for Admission</button>
                        <h4>Team Workshops</h4>
                        <menu>
                            <li>Livestream Tech Talks</li>
                            <li>Hack-a-Thon</li>
                            <li>3D Printing</li>
                            <li>Internet of Things</li>
                        </menu>
                        <h4>CEO Club</h4>
                        <menu>
                            <li>Apply for Funding at HeartBank®</li>
                            <li>Coworking Spaces</li>
                            <li>Live-in Accommodations</li>
                            <li>Portfolio Companies</li>
                        </menu>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Vacay Here!</h3>
                    <div>
                        <button onclick="this.getRootNode().host.dispatch('donate')">Donate with GitHub</button>
                        <h4>Inclusion & Diversity</h4>
                        <menu>
                            <li>Women & Minorities</li>
                            <li>Ukrainian Refugees</li>
                            <li>Cambodian Genocide</li>
                        </menu>
                        <h4>Remote University</h4>
                        <menu>
                            <li>Frontend Music</li>
                            <li>Backend Blockchain</li>
                            <li>iOS Metaverse</li>
                        </menu>
                    </div>
                </li>
            </ul>
        </nav>
        <aside>
            <select onchange="changeLanguage(event)">
                <option>Cambodia</option>
                <option disabled>Ukraine</option>
                <option disabled>United States</option>
            </select>
        </aside>
    </header>
`;

export default template;