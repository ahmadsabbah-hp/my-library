import { LabelPosition } from "@react-navigation/bottom-tabs/lib/typescript/src/types";

export enum RouteNames {
  Home = "Home",
  Books = "Books",
  Search = "Search",
  Settings = "Settings",
}

type TabBarLabel =
  | string
  | ((props: {
      focused: boolean;
      color: string;
      position: LabelPosition;
      children: string;
    }) => React.ReactNode);

type TabBarIcon = (props: {
  focused: boolean;
  color: string;
  size: number;
}) => React.ReactNode;

export interface Route {
  name: RouteNames;
  component: () => JSX.Element;
  options: {
    tabBarLabel?: TabBarLabel;
    headerShown?: boolean;
    tabBarIcon?: TabBarIcon;
  };
}
