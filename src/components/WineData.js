import React from 'react';
import { getAlcoholTypes, getFlavanoidsValues } from '../WineDataService';
import { CalculateMean, CalculateMedian, CalculateMode } from '../constants/Utility';

const WineData = () => {
  const uniqueAlcohols = getAlcoholTypes();
  
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          {uniqueAlcohols.map(alcohol => (
            <th key={alcohol}>
              class {alcohol}
            </th>
          ))}
        </tr>

        <tr>
          <th>Flavanoids Mean</th>
          {uniqueAlcohols.map(alcohol => (
            <td>{CalculateMean(getFlavanoidsValues(alcohol))}</td>
          ))}
        </tr>
        <tr>
          <th>Flavanoids Mediun</th>
          {uniqueAlcohols.map(alcohol => (
            <td>{CalculateMedian(getFlavanoidsValues(alcohol))}</td>
          ))}
        </tr>
        <tr>
          <th>Flavanoids Mode</th>
          {uniqueAlcohols.map(alcohol => (
            <td>{CalculateMode(getFlavanoidsValues(alcohol))}</td>
          ))}
        </tr>

      </table>
    </div>
  )
}

export default WineData;