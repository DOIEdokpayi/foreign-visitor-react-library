/**
 * @function Locations
 */

import * as React from 'react';
import styles from "../styles.css";
import { ILocationsProps } from './ILocationsProps';
import { ILocation } from '../types';
export default function Locations(props: ILocationsProps): React.ReactElement<ILocationsProps> {
    const {
        Locations,
        ClickHandler
    } = props;
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Facility</th>
                    <th>Street Address</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip code</th>
                </tr>
            </thead>
            <tbody>
                {
                    Locations.map((location: ILocation, index: number) =>
                        <tr key={"Contact" + index.toString()}>
                            <td>
                                <a className={styles.foreignVisitorAnchorTag} href="#" onClick={() => { ClickHandler(location) }}>{location.Title}</a>
                            </td>
                            <td>
                                {location.LEPortalForeignVisitorStreetAddr}
                            </td>
                            <td>
                                {location.LEPortalForeignVisitorFacilityCi}
                            </td>
                            <td>
                                {location.LEPortalUSStatesAndTerritories}
                            </td>
                            <td>
                                {location.LEPortalZipCode}
                            </td>
                        </tr>)
                }
            </tbody>
        </table>
    );
}
