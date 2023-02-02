import "./components/sw-header/element.mjs";
import "./components/sw-main/element.mjs";
import "./components/sw-footer/element.mjs";
import "https://frontend.siliconwat.com/components/sw-music/element.mjs";

window.onload = () => {
    document.querySelector('sw-music').shadowRoot.host.style.inset = "auto 50px 50px auto";
    document.body.style.display = 'flex';
};

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-5KRBGHZ5GV');