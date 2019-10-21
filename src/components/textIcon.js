import React from "react";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../constants/Colors";

export default function TextIcon(props) {
  return <Ionicons name={props.name} size={26} color={Colors.$red} />;
}
