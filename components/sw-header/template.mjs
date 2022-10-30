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
                    <h3>eLearn</h3>
                    <div>
                        <button>Apply for Scholarships</button>
                        <h4>Remote University</h4>
                        <menu>
                            <li>Frontend Music Course</li>
                            <li>Backend Blockchain Course</li>
                            <li>iOS Metaverse Course</li>
                        </menu>
                        <h4>Inclusion & Diversity</h4>
                        <menu>
                            <li>Women & Minorities</li>
                            <li>Cambodian Culture</li>
                            <li>Ukrainian Refugees</li>
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
                    <h3>Orchards</h3>
                    <div>
                        <button>Make Reservations</button>
                        <h4>Outdoor Group Activities</h4>
                        <menu>
                            <li>Silent Walking Meditation</li>
                            <li>Zero-Mind Meditation</li>
                            <li>Tropical Fruit Picking & Eating</li>
                            <li>Tropical Fruit Drink Mixing</li>
                        </menu>
                        <h4>Indoor Farmers' Markets</h4>
                        <menu>
                            <li>Nhia Kou Markets</li>
                            <li>Nhia Kou Orchards</li>
                        </menu>
                        <button>Purchase NK Coins</button>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>For Kids</h3>
                    <div>
                        <button onclick="this.getRootNode().host.dispatch('volunteer')">Volunteer with THonly™</button>
                        <h4>Coding Classes</h4>
                        <menu>
                            <li>English</li>
                            <li>Khmer</li>
                            <li>Math</li>
                            <li>Code-a-Thon</li>
                        </menu>
                        <h4>Club Activities</h4>
                        <menu>
                            <li>Music Recitals</li>
                            <li>Money Lessons</li>
                            <li>Kiitos Diaries</li>
                        </menu>
                        <h4>Competitions for Charity</h4>
                        <menu>
                            <li>Skate Dancing</li>
                            <li>Takraw Tournaments</li>
                        </menu>
                        <button onclick="this.getRootNode().host.dispatch('donate')">Donate with GitHub</button>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Incubator</h3>
                    <div>
                        <button onclick="this.getRootNode().host.dispatch('apply')">Apply for Admission</button>
                        <h4>Apprenticeship Program</h4>
                        <menu>
                            <li>Livestream Tech CEO Talks</li>
                            <li>Team Hack-a-Thon's</li>
                            <li>3D Printing & IoT Workshops at 333™ Lab</li>
                        </menu>
                        <h4>Club Tech CEOs</h4>
                        <menu>
                            <li>Coworking Spaces</li>
                            <li>Live-in Accommodations</li>
                            <li>HeartBank® Seed Funds</li>
                            <li>Decentralized Companies</li>
                        </menu>
                    </div>
                </li>
            </ul>
        </nav>
        <aside>
            <select onchange="changeLanguage(event)">
                <option value="kh">Cambodia</option>
                <option value="ua" disabled>Ukraine</option>
                <option value="us" disabled>United States</option>
            </select>
        </aside>
    </header>
`;

export default template;