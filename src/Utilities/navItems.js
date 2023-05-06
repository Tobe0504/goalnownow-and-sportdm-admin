import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faNewspaper, faRectangleAd } from "@fortawesome/free-solid-svg-icons";
import { v4 } from "uuid";

export const navItems = [
  {
    id: v4(),
    title: "Ads",
    icon: <FontAwesomeIcon icon={faRectangleAd} />,
    isActive: false,
    route: "/ads/goalnownow/ng",
  },
  {
    id: v4(),
    title: "SportDm News",
    icon: <FontAwesomeIcon icon={faNewspaper} />,
    isActive: false,
    route: "/sportdm-news/all-headlines",
  },
];

export const scorePageNavItems = [
  {
    id: v4(),
    title: "Matches",
    isActive: false,
    route: "/scores",
  },
  {
    id: v4(),
    title: "Tables",
    isActive: false,
    route: "/scores/tables",
  },
];

export const scorePageNavItems2 = [
  {
    id: v4(),
    title: "Matches",
    isActive: false,
    route: "/scores/:leagueId/events",
  },
  {
    id: v4(),
    title: "Tables",
    isActive: false,
    route: "/scores/:leagueId/events/standings",
  },
];
