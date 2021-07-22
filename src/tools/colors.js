const rgb = (r, g, b) => {
  return "rgb(" + r + "," + g + "," + b + ")";
};

const TYPES_COLORS = {
  normal: {
    r: 199,
    g: 199,
    b: 199,
  },
  fighting: {
    r: 242,
    g: 157,
    b: 46,
  },
  flying: {
    r: 166,
    g: 176,
    b: 186,
  },
  poison: {
    r: 49,
    g: 133,
    b: 99,
  },
  ground: {
    r: 133,
    g: 99,
    b: 49,
  },
  rock: {
    r: 128,
    g: 122,
    b: 122,
  },
  bug: {
    r: 31,
    g: 110,
    b: 45,
  },
  ghost: {
    r: 69,
    g: 19,
    b: 69,
  },
  steel: {
    r: 74,
    g: 69,
    b: 82,
  },
  fire: {
    r: 217,
    g: 55,
    b: 15,
  },
  water: {
    r: 17,
    g: 26,
    b: 207,
  },
  grass: {
    r: 20,
    g: 186,
    b: 81,
  },
  electric: {
    r: 2219,
    g: 230,
    b: 78,
  },
  psychic: {
    r: 167,
    g: 29,
    b: 222,
  },
  ice: {
    r: 21,
    g: 212,
    b: 237,
  },
  dragon: {
    r: 107,
    g: 197,
    b: 209,
  },
  dark: {
    r: 33,
    g: 38,
    b: 37,
  },
  shadow: {
    r: 33,
    g: 38,
    b: 37,
  },
};

export { rgb, TYPES_COLORS };
