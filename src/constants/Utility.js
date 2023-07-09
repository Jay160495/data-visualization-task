
export const CalculateMean = (data) => {
   return (data.reduce((sum, cur) => sum + cur, 0) / data.length).toFixed(2)
 }
 
 
 export const CalculateMode = (data) => {
   let counts = {}
   let max = -1;
   data = data.map(e => e.toString())
   data.forEach(function (e) {
     if (counts[e] === undefined) {
       counts[e] = 0
     }
     counts[e] += 1
     max = Math.max(max, counts[e]);
   })
 
   // if all the numbers have same occurence no mode.
   let allSame = true;
   data.forEach((e) => {
     if(counts[e] !== max) allSame = false;
   })
   if(allSame) return "Same Value";
 
   let ans = "";
   for(let k in counts) {
     if (counts[k] === max) ans += k + " ";
   }
   return ans;
 }
 
 export const CalculateMedian = (data) => {
   data.sort((a, b) => a >= b)
   if (data.length % 2 === 1) return (data[Math.floor(data.length / 2)]).toFixed(2);
   else return ((data[data.length / 2] + data[data.length / 2 - 1]) / 2).toFixed(2);
 }
 
 export const CalculateGamma = (data) => {
   return (
       (parseFloat(data.Ash) * parseFloat(data.Hue)) /
       parseFloat(data.Magnesium)
   );
};