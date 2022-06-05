import { n as noop, a as safe_not_equal, c as create_ssr_component, b as subscribe, v as validate_component, e as escape } from "../../chunks/index-b3dad0a6.js";
import { b as base } from "../../chunks/paths-396f020f.js";
var app = "";
var logo$1 = `<svg viewBox="0 0 48 48"  xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M32.0791 15.2987L9.50774 8.05267L0 24.1195V0H39.1391L32.0791 15.2987ZM45.7472 0L35.3017 22.6349L12.2328 15.2291L0 35.901V48H6.98923L17.7577 29.8027L40.3291 37.0487L48 20.4263V0H45.7472ZM43.5517 44.3849L48 34.7456V48H13.9611L20.4828 36.9791L43.5517 44.3849Z" />
</svg>
`;
var email = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M31.59,11.19,27,7.83V5a1,1,0,0,0-1-1H21.78L16.59.19a1,1,0,0,0-1.18,0L10.22,4H6A1,1,0,0,0,5,5V7.83L.41,11.19A1,1,0,0,0,0,12V29a3,3,0,0,0,3,3H29a3,3,0,0,0,3-3V12A1,1,0,0,0,31.59,11.19ZM27,10.31l2.2,1.61L27,13.23ZM16,2.24,18.4,4H13.6ZM7,6H25v8.43l-9,5.4-9-5.4ZM5,10.31v2.93L2.8,11.92ZM30,29a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V13.77l13.49,8.09a1,1,0,0,0,1,0L30,13.77Z"/></svg>`;
var github = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<path fill-rule="evenodd" clip-rule="evenodd" d="M192,368.004c0-8.844,7.156-16,16-16s16,7.156,16,16
	s-7.156,16-16,16S192,376.848,192,368.004L192,368.004z M349.328,494.16c-4.266,1.219-8.672,2.094-13.328,2.094
	c-26.516,0-48-21.484-48-48v-58.188c0-20.094,12.898-37.156,30.797-43.438C353.164,335.082,384,306.082,384,272.004V240
	c0-15.164-6.188-29.285-16-41.367V162.5c0-17.668-14.328-23.719-32-13.496l-24.516,14.176C303.633,161.145,295.703,160,288,160h-64
	c-7.699,0-15.633,1.145-23.484,3.18L176,149.004c-17.668-10.223-32-4.172-32,13.496v36.133c-9.812,12.082-16,26.203-16,41.367
	v32.004c0,23.281,14.488,44.188,34.578,58.812l-0.02,0.031c4.172,2.859,6.945,7.688,6.945,13.156c0,8.828-7.176,16-16,16
	c-4.52,0-8.574-1.891-11.48-4.906C115.004,334.629,96,305.035,96,272.004V240c0-18.523,6.012-35.977,16-51.375v-47.633
	c0-35.336,28.645-47.438,64-26.996l27.461,15.887C210.309,128.719,217.172,128,224,128h64c6.828,0,13.688,0.719,20.539,1.883
	L336,113.996c35.359-20.441,64-8.34,64,26.996v47.633c9.984,15.398,16,32.852,16,51.375v32.004
	c0,47.609-39.25,88.141-85.531,104.359c-0.055,0.047-0.109,0.172-0.188,0.188c-6.016,2.312-10.281,8.125-10.281,14.953v56.75
	c0,8.844,7.156,16,16,16c1.336,0,2.562-0.375,3.797-0.688C421.969,430.41,480,350.066,480,256c0-123.715-100.281-224-224-224
	C132.285,32,32,132.285,32,256c0,97.41,62.254,180.066,149.121,210.895c0.445,0.047,0.852,0.234,1.316,0.234
	c5.277,0,9.562-4.297,9.562-9.562c0-5.281-4.285-9.562-9.562-9.562c-0.113,0-0.113-0.094-0.191-0.141
	c-53.16-1.422-53.219-63.859-70.246-63.859c-8.844,0-16-7.156-16-16s7.156-16,16-16c1.688,0,4.207,0,7.988,0
	c32.02,0,27.445,64,72.012,64c17.668,0,32,14.328,32,32v28c0,15.453-12.527,28-28.004,28c-1.688,0-3.277-0.344-4.887-0.656
	C81.203,474.613,0,374.926,0,256C0,114.617,114.617,0,256,0s256,114.617,256,256C512,364.41,444.508,456.848,349.328,494.16
	L349.328,494.16z"/>
</svg>
`;
var twitter = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" >
<path fill-rule="evenodd" clip-rule="evenodd" d="M512,107.867c0,7.031-2.203,13.527-5.977,18.836
	c-10.062,15.051-23.727,25.977-37.367,37.422c-2.797,2.707-4.57,6.387-4.805,10.531c-1.523,69.156-27.141,148.246-72.78,200.512
	c-54.586,62.49-129,104.881-215.078,104.881c-8.824,0-16-7.172-16-16c0-8.844,7.176-16,16-16
	c158.555,0,244.944-138.6,255.007-256.924c0.469-1.652,0.758-3.785,0.758-6.816c0-1.008,0.016-2.012,0.07-2.996
	c0.789-13.796,6.961-26.156,16.43-35.019c0.469-0.449,0.828-0.859,1.172-1.273c11.555-11.375,22.211-24.668,30.461-37.152
	c-11.719,5.258-24.078,9.238-36.922,11.93c-2.148,0-3.961-1.812-3.961-4c0-1.094,0.445-2.098,1.164-2.816
	c0.031-0.035-0.109,0.016-0.125,0.016c12.609-11.012,22.281-25.402,27.484-41.816c-8.469,5.059-17.406,9.418-26.68,13.098
	c-5.992,2.387-12.5,3.766-19.359,3.766c-10.672,0-20.593-3.211-28.843-8.719c-0.32-0.215-0.648-0.359-0.969-0.555
	c-13.672-9.184-29.617-14.711-47.68-14.711l-1.883,0.34c-39.742,0-69.945,22.406-81.234,56.707
	c-0.317,0.147-3.551,14.406-3.875,16.453c-2.996,19.121-19.535,33.742-39.504,33.742c-2.168,0-4.305-0.18-6.387-0.539
	c-52.472-9.812-99.847-32.504-135.207-69.406c-0.215-0.18-0.379-0.234-0.684-0.539c-4.68-4.684-12.27-4.684-16.969,0
	c-1.094,1.113-1.938,2.367-2.531,3.73c-0.141,0.344-0.23,0.344-0.34,0.414c-4.27,9.867-7.391,20.539-7.391,31.09
	c0,21.832,8.879,41.761,22.227,57.601c0,0.02-0.16-0.07-0.09,0c1.168,1.398,1.867,3.195,1.867,5.148c0,4.414-3.59,8-8.004,8
	c-0.879,0-1.703-0.23-2.492-0.5c-0.125-0.055-0.25-0.109-0.375-0.16c-0.145,0.051-0.305,0.125-0.559,0
	c-1.074-0.539-2.277-0.844-3.566-0.844c-4.344,0-7.859,3.516-7.969,7.82c4.164,28.469,21.637,53.676,45.227,68.458
	c-0.305-0.031-0.484-0.031-0.375,0.031c2.168,1.422,3.621,3.898,3.621,6.695c0,4.414-3.586,8-8,8c-0.09,0-0.18-0.016-0.27-0.016
	c-0.105-0.023-0.195-0.055-0.305-0.07c-0.285-0.039-0.555-0.094-0.844-0.125c-2.152,0.109-3.84,1.812-3.84,3.961
	c0,0.633,0.129,1.219,0.395,1.742c6.512,16.219,17.527,30.078,31.395,40.219c0.164,0.125,0.199,0.234,0.395,0.375
	c1.184,0.844,2.297,1.812,3.375,2.875c10.922,10.922,10.922,28.648,0,39.594c-3.355,3.328-7.34,5.664-11.555,6.953
	c-0.035,0.016-0.016,0-0.055,0.016c-16.395,5.203-33.762,8.219-52.203,8.219c-3.086,0-6.527,0-9.992,0c-2.207,0-4,1.797-4,4
	c0,1.297,0.645,2.375,1.578,3.094c6.586,3.906,13.332,7.727,20.344,11.281l-0.016,0.016c4.715,2.639,7.965,7.623,7.965,13.436
	c0,8.523-6.906,15.43-15.43,15.43c-3.48,0-6.672-1.203-9.258-3.141c-11.211-5.867-22.082-12.148-32.414-18.836
	C2.182,417.184-3.166,401.34,1.893,387.129c4.594-12.992,16.703-19.086,30.105-19.086c5.953,0.719,17.902,0,24,0
	c12.289,0,22.355-2.531,33.996-5.344c-17.473-14.82-30.965-34.555-38.266-57.57c-1.812-5.727-1.992-11.734-0.645-17.398
	c-20.648-22.531-35.089-55.293-35.089-87.672c0.16-8.02,5.273-14.711,10.496-20.434c-5.059-13.761-10.496-28.433-10.496-43.574
	c0-22.137,8.558-43.969,19.554-63.004c5.309-9.184,17.957-16.164,28.449-16.988c9.598,0,18.031,5.273,24.148,12.844
	c30.176,37.352,77.406,57.426,123.871,68.906c0.789,0.141,1.633,0.25,2.477,0.25c7.625,0,13.938-5.293,15.59-12.434
	C242.817,71.844,284.563,32,342.118,32c24.344,0,48.078,7.34,68.147,20.633c3.125,1.973,6.766,3.176,10.727,3.176
	c1.758,0,3.445-0.289,5.039-0.719c8.672-3.23,17.117-6.98,25.117-11.785c5.078-3.035,10.727-3.266,16.359-3.266
	c7.109,0,14.195,1.129,20.008,5.793c10.422,8.379,14.633,22.391,10.562,35.199c0,0.035-0.016,0.07-0.016,0.105
	C506.477,86.984,512,96.781,512,107.867L512,107.867z M31.998,368.043C30.74,367.902,33.251,368.043,31.998,368.043L31.998,368.043z
	 M63.998,56.059C63.173,56.059,64.826,55.984,63.998,56.059L63.998,56.059z M120.005,440.049c8.828,0,16.004,7.156,16.004,16
	c0,8.828-7.176,16-16.004,16c-8.844,0-16-7.172-16-16C104.005,447.205,111.162,440.049,120.005,440.049L120.005,440.049z"/>
</svg>
`;
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
const showSideMenu = writable(false);
var SideMenu_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: '.side-menu.svelte-tgnzrs.svelte-tgnzrs{z-index:999}.side-menu__background.svelte-tgnzrs.svelte-tgnzrs{position:fixed;top:0;left:0;height:100%;width:100%;background-color:rgba(33, 33, 33, 0.65);z-index:1000;overflow:auto}.side-menu__foreground.svelte-tgnzrs.svelte-tgnzrs{position:fixed;top:0;right:0;height:100%;width:100%;max-width:600px;background-color:var(--color-teal-primary);z-index:1001;overflow:auto}.side-menu__close-btn.svelte-tgnzrs.svelte-tgnzrs{position:absolute;appearance:none;border:none;background-color:transparent;color:var(--color-dark-primary);cursor:pointer;top:1rem;right:1rem;padding:2px 8px;font-size:32px;line-height:32px;font-weight:500;display:inline-flex;justify-content:center;align-items:center;transition:all 0.4s}.side-menu__close-btn.svelte-tgnzrs.svelte-tgnzrs:hover{color:var(--color-white-primary);background-color:var(--color-dark-primary)}.side-menu__contacts-icon.svelte-tgnzrs.svelte-tgnzrs{width:36px;line-height:0;margin:8px;display:inline-block;cursor:pointer;transition:all 0.4s}.side-menu__contacts-icon.svelte-tgnzrs a.svelte-tgnzrs{fill:var(--color-dark-primary);transition:all 0.4s}.side-menu__contacts-icon.svelte-tgnzrs:hover a.svelte-tgnzrs{fill:var(--color-white-primary)}.side-menu__contacts-icon.svelte-tgnzrs.svelte-tgnzrs:hover{transform:scale(1.1)}".no-scroll"{overflow:hidden}section.svelte-tgnzrs.svelte-tgnzrs{padding:3rem;font-size:2rem;line-height:2.5rem;font-weight:400;color:var(--color-white-primary)}.section__header.svelte-tgnzrs.svelte-tgnzrs{text-transform:uppercase;font-size:2.25rem;line-height:3rem;font-weight:600;margin:0 0 5rem 0;color:var(--color-dark-primary)}section.svelte-tgnzrs p.svelte-tgnzrs{font-size:1.75rem;line-height:2.5rem;text-align:left;margin:0 auto 5rem auto}',
  map: null
};
const SideMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $showSideMenu, $$unsubscribe_showSideMenu;
  $$unsubscribe_showSideMenu = subscribe(showSideMenu, (value) => $showSideMenu = value);
  $$result.css.add(css$2);
  $$unsubscribe_showSideMenu();
  return `${$showSideMenu ? `<aside class="${"side-menu svelte-tgnzrs"}"><div class="${"side-menu__background svelte-tgnzrs"}"><div class="${"side-menu__foreground svelte-tgnzrs"}"><button class="${"side-menu__close-btn svelte-tgnzrs"}" aria-label="${"Close About"}">\xD7</button>
        <section class="${"svelte-tgnzrs"}"><h2 class="${"section__header svelte-tgnzrs"}"><span>What is this site about?</span></h2>
          <p class="${"svelte-tgnzrs"}">OhMyChart! is a data-driven visualizations, infographics and visual
            stories focused on history and economy.
          </p>
          <p class="${"svelte-tgnzrs"}"><span class="${"side-menu__contacts-icon svelte-tgnzrs"}"><a href="${"mailto:dmitrii@ohmychart.com"}" class="${"svelte-tgnzrs"}"><!-- HTML_TAG_START -->${email}<!-- HTML_TAG_END --></a></span>
            <span class="${"side-menu__contacts-icon svelte-tgnzrs"}"><a href="${"https://github.com/ohmychart"}" class="${"svelte-tgnzrs"}"><!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END --></a></span>
            <span class="${"side-menu__contacts-icon svelte-tgnzrs"}"><a href="${"https://twitter.com/ohmychart"}" class="${"svelte-tgnzrs"}"><!-- HTML_TAG_START -->${twitter}<!-- HTML_TAG_END --></a></span></p></section></div></div></aside>` : ``}`;
});
var Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: 'header.svelte-99b6fr.svelte-99b6fr{margin-bottom:3rem}#main-header.svelte-99b6fr.svelte-99b6fr{background-color:var(--color-teal-primary);height:var(main-header-height);padding:var(--main-header-padding);display:flex;flex-direction:row;justify-content:space-between;align-items:center}@media(max-width: 500px){#main-header.svelte-99b6fr.svelte-99b6fr{padding:var(--main-header-padding-mobile)}}#main-header-border.svelte-99b6fr.svelte-99b6fr{height:var(--main-header-border-height);background-image:url("/assets/img/pixel-texture.png")}.header__logo__icon.svelte-99b6fr .svelte-99b6fr{width:48px;margin:0 1rem;display:inline-block;transition:all 0.4s;fill:var(--color-white-primary)}.header__logo.svelte-99b6fr.svelte-99b6fr{display:flex;flex-direction:row;line-height:0;align-items:center}.header__logo__text.svelte-99b6fr.svelte-99b6fr{font-size:1.5rem;line-height:1.85rem;text-transform:uppercase;text-decoration:none;font-weight:700}@media(max-width: 500px){.header__logo__text.svelte-99b6fr.svelte-99b6fr{display:none}}.header__about-menu.svelte-99b6fr span.svelte-99b6fr{font-size:1.5rem;text-transform:uppercase;text-decoration:none;font-weight:700;color:var(--color-dark-primary);cursor:pointer;transition:0.4s all}.header__about-menu.svelte-99b6fr:hover span.svelte-99b6fr{color:#fff}',
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_showSideMenu;
  $$unsubscribe_showSideMenu = subscribe(showSideMenu, (value) => value);
  $$result.css.add(css$1);
  $$unsubscribe_showSideMenu();
  return `<header class="${"header svelte-99b6fr"}"><div id="${"main-header"}" class="${"svelte-99b6fr"}"><div class="${"header__logo svelte-99b6fr"}"><div class="${"header__logo__icon svelte-99b6fr"}"><a href="${"https://ohmychart.com"}" class="${"svelte-99b6fr"}"><!-- HTML_TAG_START -->${logo$1}<!-- HTML_TAG_END --></a></div>

      <div class="${"header__logo__text svelte-99b6fr"}"><div>Data-driven visualizations &amp;</div>
        <div>visual stories</div></div></div>

    <div class="${"header__about-menu svelte-99b6fr"}"><span class="${"svelte-99b6fr"}">About</span></div></div>

  <div id="${"main-header-border"}" class="${"svelte-99b6fr"}"></div>

  ${validate_component(SideMenu, "SideMenu").$$render($$result, {}, {}, {})}
</header>`;
});
var logo = `<svg viewBox="0 0 103 103" xmlns="http://www.w3.org/2000/svg" >
<rect x="18" y="16" width="64" height="64" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M41.677 55.7369L71.7721 65.3983L85.1434 36.4235L92.4072 39.7756L76.0689 75.1798L45.3104 65.3055L27.8411 94.8263L20.9563 90.7521L41.677 55.7369Z" fill="#212121"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.677 26.7369L60.7721 36.3983L74.1434 7.42351L81.4072 10.7756L65.0689 46.1798L34.3104 36.3055L16.8411 65.8263L9.95627 61.7521L30.677 26.7369Z" fill="#212121"/>
</svg>
`;
var Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-3luuo0{width:100%;color:var(--color-white-primary);text-align:center;border-top:2px solid var(--color-teal-primary)}.logo.svelte-3luuo0{width:64px;height:64px;padding:8px;margin:0 auto;fill:var(--color-teal-primary)}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="${"svelte-3luuo0"}"><div class="${"logo svelte-3luuo0"}"><!-- HTML_TAG_START -->${logo}<!-- HTML_TAG_END --></div>
</footer>`;
});
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>OhMyChart! \u2014 Data-Driven Visualizations and Visual Stories</title>`, ""}<meta charset="${"utf-8"}" data-svelte="svelte-b5fzow"><meta name="${"viewport"}" content="${"width=device-width, initial-scale=1.0"}" data-svelte="svelte-b5fzow"><meta http-equiv="${"Content-Type"}" content="${"text/html; charset=utf-8"}" data-svelte="svelte-b5fzow"><meta name="${"description"}" content="${""}" data-svelte="svelte-b5fzow"><meta name="${"author"}" content="${"Ohmychart.com"}" data-svelte="svelte-b5fzow"><link rel="${"apple-touch-icon"}" sizes="${"180x180"}" href="${escape(base) + "/apple-touch-icon.png"}" data-svelte="svelte-b5fzow"><link rel="${"icon"}" type="${"image/png"}" sizes="${"32x32"}" href="${escape(base) + "/favicon-32x32.png"}" data-svelte="svelte-b5fzow"><link rel="${"icon"}" type="${"image/png"}" sizes="${"16x16"}" href="${escape(base) + "/favicon-16x16.png"}" data-svelte="svelte-b5fzow"><link rel="${"manifest"}" href="${escape(base) + "/site.webmanifest"}" data-svelte="svelte-b5fzow"><link rel="${"preconnect"}" href="${"https://fonts.googleapis.com"}" data-svelte="svelte-b5fzow"><link rel="${"preconnect"}" href="${"https://fonts.gstatic.com"}" crossorigin data-svelte="svelte-b5fzow"><link href="${"https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap"}" rel="${"stylesheet"}" data-svelte="svelte-b5fzow">${`
	<script async src="${"https://www.googletagmanager.com/gtag/js?id=G-68TDHFEGEZ"}" data-svelte="svelte-b5fzow"><\/script>
	<script data-svelte="svelte-b5fzow">window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-68TDHFEGEZ');
	<\/script>`}`, ""}

${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export { _layout as default };
