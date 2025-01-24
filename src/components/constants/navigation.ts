import ROUTES from "@/components/constants/a-routes";

export const NAVIGATION_LINKS = [
  {
    text: "navigation.home",
    href: ROUTES.INDEX,
  },
  {
    text: "navigation.about",
    href: ROUTES.OUR_GUIDE,
  },
  {
    text: "navigation.contact",
    href: `${ROUTES.INDEX}/#contact`,
  },
  {
    text: "navigation.profile",
    href: ROUTES.SEARCH,
  },
];
