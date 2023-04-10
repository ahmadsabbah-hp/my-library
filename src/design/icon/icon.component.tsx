import React, { FC } from "react";
import { Icon as RNEIcon } from "react-native-elements";

interface IconComponentProps {
  onPress?: (...args) => void;
  iconName: string;
  color: string;
  style?: object;
  raised: boolean;
  type?: string;
}

export const Icon = ({
  onPress,
  iconName,
  color,
  raised,
  type = "ant-design",
  ...rest
}: IconComponentProps) => (
  <RNEIcon
    raised={raised}
    name={iconName}
    type={type}
    color={color}
    onPress={onPress}
    {...rest}
  />
);
