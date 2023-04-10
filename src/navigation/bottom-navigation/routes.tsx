import { Route, RouteNames } from "../../common/interfaces";
import { Books, Home, Search, Settings } from "../../screens";
import { generateTabBarIcon } from "../utils";

export const bottomRoutes: Route[] = [
  {
    name: RouteNames.Home,
    component: Home,
    options: {
      headerShown: false,
      tabBarLabel: RouteNames.Home,
      tabBarIcon: generateTabBarIcon("home"),
    },
  },
  {
    name: RouteNames.Books,
    component: Books,
    options: {
      headerShown: false,
      tabBarLabel: RouteNames.Books,
      tabBarIcon: generateTabBarIcon("bookshelf", "material-community"),
    },
  },
  {
    name: RouteNames.Search,
    component: Search,
    options: {
      headerShown: false,
      tabBarLabel: RouteNames.Search,
      tabBarIcon: generateTabBarIcon("search1"),
    },
  },
  {
    name: RouteNames.Settings,
    component: Settings,
    options: {
      headerShown: false,
      tabBarLabel: RouteNames.Settings,
      tabBarIcon: generateTabBarIcon("setting"),
    },
  },
];
