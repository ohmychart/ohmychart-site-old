import fsuCover from "$svg/fsu-fwt-cover.svg";
import rusTradeCover from "$svg/rus-trade-cover.svg";
import fragilityCover from '$svg/fragility-cover.svg';
import centuryGdpCover from '$svg/100-years-gdp-cover.svg'

export const posts = [
  {
    title: "100 Years Of Economic Growth",
    description: "Visualizing change in GDP Per Capita from 1909 to 2018",
    cover: centuryGdpCover,
    url: "/100-years-economic-growth",
  },
  {
    title: "Energy Resources & State Fragility",
    description: "Visualization of the world's oil and gas reserves in terms of vulnerability expressed through the Fragile State Index levels",
    cover: fragilityCover,
    url: "/energy-and-state-fragility",
  },
  {
    title: "Economic development of the former USSR and Warsaw Pact countries",
    description: "Visualizing first 30 years of the post-Soviet economy development. Which countries have performed best and worst?",
    cover: fsuCover,
    url: "/fsu-fwt-economic-development",
  },
  {
    title: "Russian global trade in 2020 [RUS]",
    description: "Visualizing Russian economy's import and export of goods",
    cover: rusTradeCover,
    url: "/russian-global-trade",
  },

];
