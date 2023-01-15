import { THONLY } from "https://thonly.org/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${THONLY}/components/tl-header/shadow.css">
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
        <ul>
            <li>
                <h3>eLearn</h3>
                <nav>
                    <a><button>Apply for Scholarships</button></a>
                    <h4>Remote University</h4>
                    <menu>
                        <li><a>Frontend Music Course</a></li>
                        <li><a>Backend Blockchain Course</a></li>
                        <li><a>iOS Metaverse Course</a></li>
                    </menu>
                    <h4>Inclusion & Diversity</h4>
                    <menu>
                        <li><a>Women & Minorities</a></li>
                        <li><a>Cambodian Culture</a></li>
                        <li><a>Ukrainian Refugees</a></li>
                    </menu>
                </nav>
            </li>
            <li>
                <h3>Dorms</h3>
                <nav>
                    <a><button>Book on Airbnb</button></a>
                    <h4>Anemities</h4>
                    <menu>
                        <li><a>Study Groups</a></li>
                        <li><a>Metaverse Arcade</a></li>
                        <li><a>Gondola Ferry</a></li>
                    </menu>
                    <h4>Housing</h4>
                    <menu>
                        <li><a>Plazas</a></li>
                        <li><a>Suites</a></li>
                        <li><a>Studios</a></li>
                    </menu>
                </nav>
            </li>
            <li>
                <h3>Orchards</h3>
                <nav>
                    <a><button>Make Reservations</button></a>
                    <h4>Outdoor Group Activities</h4>
                    <menu>
                        <li><a>Silent Walking Meditation</a></li>
                        <li><a>Tropical Fruit Picking & Eating</a></li>
                        <li><a>Tropical Fruit Drink Mixer</a></li>
                    </menu>
                    <h4>Indoor Farmers' Markets</h4>
                    <menu>
                        <li><a>Nhia Kou Markets</a></li>
                        <li><a>Nhia Kou Orchards</a></li>
                    </menu>
                    <br>
                    <a><button>Purchase NK Coins</button></a>
                </nav>
            </li>
            <li>
                <h3>For Kids</h3>
                <nav>
                    <a><button>Volunteer with THonly™</button></a>
                    <h4>Coding Classes</h4>
                    <menu>
                        <li><a>Learn English</a></li>
                        <li><a>Learn Math</a></li>                   
                        <li><a>Story Code-a-Thon</a></li>
                        <li><a>Livestream Tutoring</a></li>
                    </menu>
                    <h4>Club Activities</h4>
                    <menu>
                        <li><a>Music Recitals</a></li>
                        <li><a>Money Lessons</a></li>
                        <li><a>Kiitos Diaries</a></li>
                    </menu>
                    <h4>Charity Fundraisers</h4>
                    <menu>
                        <li><a>Skate Dancing</a></li>
                        <li><a>Takraw Tournaments</a></li>
                    </menu>
                    <br>
                    <a><button>Donate with GitHub</button></a>
                </nav>
            </li>
            <li>
                <h3>Incubator</h3>
                <nav>
                    <a><button>Apply for Admission</button></a>
                    <h4>Apprenticeship Program</h4>
                    <menu>
                        <li><a>Livestream Tech CEO Talks</a></li>
                        <li><a>Team Hack-a-Thon's</a></li>
                        <li><a>3D Printing & IoT Workshops at 333™ Lab</a></li>
                    </menu>
                    <h4>Club Tech CEOs</h4>
                    <menu>
                        <li><a>Coworking Spaces</a></li>
                        <li><a>Live-in Accommodations</a></li>
                        <li><a>HeartBank® Seed Funds</a></li>
                        <li><a>Decentralized Companies</a></li>
                    </menu>
                </nav>
            </li>
        </ul>
        <aside>
            <select onchange="this.getRootNode().host.changeCountry(event)">
                <option value="kh" disabled>Cambodia</option>
                <option value="ua" selected>Ukraine</option>
                <option value="us" disabled>United States</option>
            </select>
        </aside>
    </header>
`;

export default template;