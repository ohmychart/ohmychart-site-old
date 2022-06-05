import { c as create_ssr_component, d as add_attribute, e as escape, f as each, v as validate_component } from "../../chunks/index-b3dad0a6.js";
import { b as base } from "../../chunks/paths-396f020f.js";
var PostEntry_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "a.svelte-1p4gtub.svelte-1p4gtub{text-decoration:none;color:inherit}.post-entry.svelte-1p4gtub.svelte-1p4gtub{outline:2px solid var(--color-teal-primary);background-color:var(--color-dark-primary);height:100%;position:relative;min-height:245px;display:flex;align-items:flex-end;cursor:pointer;transition:all 0.4s}.post-entry__cover.svelte-1p4gtub.svelte-1p4gtub{fill:var(--color-teal-primary);stroke:var(--color-teal-primary);stroke-width:2px;width:100%}.post-entry.svelte-1p4gtub.svelte-1p4gtub:hover{background-color:var(--color-teal-primary)}.post-entry__content.svelte-1p4gtub h2.post-entry__title.svelte-1p4gtub{font-size:2rem;line-height:2.5rem;font-weight:400;text-transform:uppercase;color:var(--color-white-primary);margin:1.5rem;position:absolute;top:0;left:0}.post-entry__description.svelte-1p4gtub.svelte-1p4gtub{font-size:1.75rem;line-height:2.25rem;color:var(--color-dark-primary);margin:1.5rem;position:absolute;top:0;left:0}",
  map: null
};
const PostEntry = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { postInfo } = $$props;
  if ($$props.postInfo === void 0 && $$bindings.postInfo && postInfo !== void 0)
    $$bindings.postInfo(postInfo);
  $$result.css.add(css$1);
  return `<a${add_attribute("href", base + postInfo.url, 0)} rel="${"external"}" class="${"svelte-1p4gtub"}"><div class="${"post-entry svelte-1p4gtub"}"><div class="${"post-entry__content svelte-1p4gtub"}">${`<h2 class="${"post-entry__title svelte-1p4gtub"}">${escape(postInfo.title)}</h2>`}</div>
    <div class="${"post-entry__cover svelte-1p4gtub"}"><!-- HTML_TAG_START -->${postInfo.cover}<!-- HTML_TAG_END --></div></div>
</a>`;
});
var fsuCover = `<svg style="display: block;" viewBox="0 0 277 92" xmlns="http://www.w3.org/2000/svg">
<line x1="0.759957" y1="69.0292" x2="275.76" y2="1.02924" />
<line x1="0.759957" y1="79.0292" x2="275.76" y2="11.0292" />
<line y1="-1" x2="283.283" y2="-1" transform="matrix(0.970762 0.240043 0.240043 -0.970762 1 22)" />
<line x1="1.15799" y1="45.0126" x2="276.158" y2="89.0126" />
</svg>
`;
var rusTradeCover = `<svg style="display: block;" viewBox="0 0 277 83" xmlns="http://www.w3.org/2000/svg">
<path d="M87.63 2L1 34.6882V82H276V34.6882L251.824 42.4301L208.509 2L159.15 17.4839L87.63 2Z" fill="none"/>
<path d="M87.63 59.6279L1 8V82H276V30.3721L251.824 54.4651L205.487 59.6279L159.15 34.6744L87.63 59.6279Z" />
</svg>
`;
const posts = [
  {
    title: "Economic development of the former USSR and Warsaw Pact countries",
    description: "Visualizing first 30 years of the post-Soviet economy development. Which countries have performed best and worst?",
    cover: fsuCover,
    url: "/fsu-fwt-economic-development"
  },
  {
    title: "Russian global trade in 2020 [RUS]",
    description: "Visualizing Russian economy's import and export of goods",
    cover: rusTradeCover,
    url: "/russian-global-trade"
  }
];
var Home_svelte_svelte_type_style_lang = "";
const css = {
  code: ".posts.svelte-4865q1.svelte-4865q1{margin-bottom:3rem;min-height:100vh}.posts.svelte-4865q1 ul.svelte-4865q1{list-style:none;margin:0 auto;padding:0;max-width:var(--main-column-width);display:grid;grid-template-columns:1fr 1fr;row-gap:1.5rem;column-gap:1.5rem}",
  map: null
};
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="${"posts svelte-4865q1"}"><ul class="${"svelte-4865q1"}">${each(posts, (postInfo) => {
    return `<li class="${"posts__post-entry"}">${validate_component(PostEntry, "PostEntry").$$render($$result, { postInfo }, {}, {})}
			</li>`;
  })}</ul>
</section>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Home, "Home").$$render($$result, {}, {}, {})}
</main>`;
});
export { Routes as default };
