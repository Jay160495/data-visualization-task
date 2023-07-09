import { WineJsonData } from "./WineJsonData";


export const getAlcoholTypes = () => {
  return [...new Set(WineJsonData.map((data) => data.Alcohol))];
}

export const getFlavanoidsValues = (type) => {
  return WineJsonData.filter(data => data.Alcohol === type).map(data => parseFloat(data.Flavanoids.toString()));
}