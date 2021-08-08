import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DetailsScreen from "../screens/DetailsScreen";

const Tab = createMaterialTopTabNavigator();

const D = ["charizard", "pikachu"];

//TODO do the fetch here maybe? evolution to create the Tabs -> For each Evolution i need the image
const Tabs = ({ route }) => {
  return (
    <Tab.Navigator tabBarPosition="bottom" firstRoute={DetailsScreen}>
      {D.map((d, index) => {
        route.params.name = d;
        return (
          <Tab.Screen
            key={index}
            name={d}
            children={() => <DetailsScreen name={d} />}
            initialParams={route.params}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default Tabs;
