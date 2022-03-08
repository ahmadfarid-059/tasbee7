import { Icon as RNEIcon } from "react-native-elements";

export default function Icon ({
    onPress,
    iconName,
    color,
    raised,
    ...rest
  }) {

    return <RNEIcon
      raised={raised}
      name={iconName}
      type="ant-design"
      color={color}
      onPress={onPress}
      {...rest}
    />
  };