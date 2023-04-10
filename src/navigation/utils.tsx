import { Icon } from "../design";

export const generateTabBarIcon =
  (name: string, type?: string) =>
  ({ color, size }) =>
    <Icon iconName={name} color={color} raised={false} type={type} />;
