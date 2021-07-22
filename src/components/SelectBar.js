import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { PickerItem } from "react-native-woodpicker";
import { Picker } from "react-native-woodpicker";

//TODO data
const SelectBar = ({title, placeholder, isDisabled}) => {
  const [pickedData, setPickedData] = useState([]);

  const data = [
    { label: "Kanto ", value: 1 },
    { label: "Generation 2 ", value: 2 },
  ];

  return (
    <View style={styles.backgroundStyle}>
      <Picker
        item={pickedData}
        items={data}
        style={styles.container}
        textInputStyle={styles.textStyle}
        onItemChange={setPickedData}
        title="Data Picker"
        placeholder= {placeholder}
        // backdropAnimation={{ opactity: 0 }}
        mode="dropdown"
        //isNullable
        disabled= {isDisabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#E1E1E1',
        height: 50,
        marginHorizontal: 15,
        borderRadius: 5,
        flexDirection: 'row',
        marginTop: 15,
        marginBottom:10,
  },
  textStyle: {
    textAlign: "center",
    width: "100%",
    fontSize: 16,
  },
  container: {
    padding: 20,
    alignSelf: 'center',
    flex: 1
  },
});

export default SelectBar;
