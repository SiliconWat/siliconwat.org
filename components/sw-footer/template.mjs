const template = document.createElement("template");
const origin = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5500" : "https://thonly.org";

template.innerHTML = `
    <link rel="stylesheet" href="${origin}/components/tl-footer/shadow.css">
    <link rel="stylesheet" href="components/sw-footer/shadow.css">
    <nav>
        <main>
            <section>
                <div>
                    <h5>Donors</h5>
                    <ul class="donors">
                        <li><a href="https://github.com/thonly"><img src="https://github.com/thonly.png?size=100"></a></li>
                        <li><a href="https://github.com/panhiathao"><img src="https://github.com/panhiathao.png?size=100"></a></li>
                        <li><a href="https://github.com/chengsieuly"><img src="https://github.com/chengsieuly.png?size=100"></a></li>
                        <li><a href="https://github.com/lykimche"><img src="https://github.com/lykimche.png?size=100"></a></li>
                    </ul>
                </div>
            </section>
            <section>
                <div>
                    <h5>Thank</h5>
                    <ul>
                        <li><a href="https://kiitos.earth">Kiitos</a></li>
                    </ul> 
                </div>
                <div>
                    <h5>Donate</h5>
                    <ul>
                        <li><a href="https://heartbank.fund">HeartBank</a></li>
                        <li><a href="https://github.com/sponsors/SiliconWat">GitHub</a></li>
                    </ul>
                </div>
            </section>
            <section>
                <div>
                    <h5>Connect</h5>
                    <ul>
                        <li><a href="https://talk.siliconwat.org">Silicon Wat</a></li>
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