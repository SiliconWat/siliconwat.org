import "./sw-donors/element.mjs";
import { ORIGIN } from "/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${ORIGIN}/components/tl-footer/shadow.css">
    <link rel="stylesheet" href="components/sw-footer/shadow.css">
    <nav>
        <main>
            <section>
                <sw-donors></sw-donors>
            </section>
            <section>
                <div>
                    <h5>Thank</h5>
                    <ul>
                        <li><a href="https://dear.kiitos.earth/#SiliconWat">Kiitos</a></li>
                    </ul> 
                </div>
                <div>
                    <h5>Donate</h5>
                    <ul>
                        <li><a href="https://heartbank.fund/#SiliconWat">HeartBank</a></li>
                        <li><a href="https://github.com/sponsors/SiliconWat">GitHub</a></li>
                    </ul>
                </div>
            </section>
            <section>
                <div>
                    <h5>Connect</h5>
                    <ul>
                        <li><a href="https://me.thonly.net/#SiliconWat">THonly</a></li>
                        <li><a href="https://twitter.com/siliconwat">Twitter</a></li>
                        <li><a href="https://www.facebook.com/siliconwat">Facebook</a></li>
                        <li><a href="https://medium.com/@siliconwat">Medium</a></li>
                    </ul>
                </div>
                <div>
                    <h5>Contact</h5>
                    <ul>
                        <li><a href="https://thonly.org">Founder: Thon Ly</a></li>
                        <li><a href="mailto:campus@siliconwat.org">campus@siliconwat.org</a></li>
                    </ul> 
                </div>
            </section>
        </main>
        <footer>
            <small><a href="https://siliconwat.com">Silicon Wat University</a> &copy; 2023</small>
        </footer>
    </nav>
`;

export default template;