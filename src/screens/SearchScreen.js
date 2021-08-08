import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { withNavigation } from "react-navigation";
import SearchBar from "../components/SearchBar";
import SelectBar from "../components/SelectBar";
import PokemonCard from "../components/PokemonCard";
import axios from "axios";

const SearchScreen = ({ navigation }) => {
  const [pokemons, setPokemons] = useState([]);

  const getAllPokemons = async () => {
    let data;
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=151`
      );
      if (res) {
        data = res.data.results;
        const d = [];
        for (let i = 0; i < data.length; i++) {
          const res = await axios.get(data[i].url);
          const pokemon = {
            name: res.data.species.name,
            type: res.data.types,
            url: res.data.species.url,
            image: res.data.sprites.other["official-artwork"].front_default,
          };
          d.push(pokemon);
        }
        setPokemons(d);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  if (pokemons.length === 0) {
    return (
      <ActivityIndicator
        style={styles.indicator}
        size="large"
        color="#00ff00"
      />
    );
  }

  return (
    <>
      <SearchBar />
      <View style={styles.selectBarsContainer}>
        <SelectBar placeholder="Select Generation" isDisabled={true} />
        <SelectBar placeholder="Select Type" isDisabled={true} />
      </View>

      <FlatList
        style={styles.container}
        data={pokemons}
        keyExtractor={(result, index) => result.name + index}
        numColumns={2}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate({
                  name: 'DetailsTab',
                  params: { name: item.name, types: item.type, image: item.image},
                  merge: true,
                })
              }
            >
              <PokemonCard
                key={item.name + index}
                name={item.name}
                types={item.type}
                image={item.image}
                index={index + 1}
              />
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  selectBarsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
  indicator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 80,
  },
});

export default withNavigation(SearchScreen);
