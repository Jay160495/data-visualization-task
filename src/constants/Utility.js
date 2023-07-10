
export const CalculateMean = (data) => {
   return (data.reduce((sum, cur) => sum + cur, 0) / data.length).toFixed(2)
 }
 
 export const CalculateMode = (data) => {
  const mode = {};
  let max = 0, count = 0;

  for(let i = 0; i < data.length; i++) {
    const item = data[i];
    
    if(mode[item]) {
      mode[item]++;
    } else {
      mode[item] = 1;
    }
    
    if(count < mode[item]) {
      max = item;
      count = mode[item];
    }
  }
   
  return max.toFixed(2);
 }
 
 export const CalculateMedian = (data) => {
   data.sort((a, b) => a - b)
   if (data.length % 2 === 1) return (data[Math.floor(data.length / 2)]).toFixed(2);
   else return ((data[data.length / 2] + data[data.length / 2 - 1]) / 2).toFixed(2);
 }
 
 export const CalculateGamma = (data) => {
   return (
       (parseFloat(data.Ash) * parseFloat(data.Hue)) /
       parseFloat(data.Magnesium)
   );
};