import React from "react";

import { CalculateGamma, CalculateMean, CalculateMedian, CalculateMode } from "../constants/Utility";
import { WineJsonData } from "../WineJsonData";

const WineGamaData = () => {
    const uniqueAlcohols = [...new Set(WineJsonData.map((entry) => entry.Alcohol))];

    return (
        <div>
            <h4>Gamma Table</h4>
            <table>
                <tbody>
                    <tr>
                        <th>Measure</th>
                        {uniqueAlcohols.map((alcohol) => (
                            <th key={alcohol}>Class {alcohol}</th>
                        ))}
                    </tr>

                    <tr>
                        <th>Gamma Mean</th>
                        {uniqueAlcohols.map((alcohol) => (
                            <td key={alcohol}>
                                {CalculateMean(
                                    WineJsonData.filter(
                                        (data) => data.Alcohol === alcohol
                                    ).map(CalculateGamma)
                                )}
                            </td>
                        ))}
                    </tr>
                    <tr>
                        <th>Gamma Mediun</th>
                        {uniqueAlcohols.map((alcohol) => (
                            <td key={alcohol}>
                                {CalculateMedian(
                                    WineJsonData.filter(
                                        (data) => data.Alcohol === alcohol
                                    ).map(CalculateGamma)
                                )}
                            </td>
                        ))}
                    </tr>
                    <tr>
                        <th>Gamma Mode</th>
                        {uniqueAlcohols.map((alcohol) => (
                            <td key={alcohol}>
                                {CalculateMode(
                                    WineJsonData.filter(
                                        (data) => data.Alcohol === alcohol
                                    ).map(CalculateGamma)
                                )}
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default WineGamaData;