import "./components/sw-header/element.mjs";

import "./components/sw-main/sw-stealth/element.mjs";
import "./components/sw-main/element.mjs";

import "./components/sw-footer/element.mjs";
import "https://frontend.siliconwat.com/components/sw-music/element.mjs";

window.onload = () => document.querySelector('sw-music').shadowRoot.host.style.inset = "auto 50px 50px auto";

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-5KRBGHZ5GV');