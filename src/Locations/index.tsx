/**
 * @class Locations
 */

import * as React from 'react';
import styles from "../styles.css";
import { ILocationsProps } from './ILocationsProps';
import { ILocation } from '..';
export default class Locations extends React.Component<ILocationsProps> {
    public render(): JSX.Element {
        const {
            Locations,
            ClickHandler
        } = this.props;
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Facility</th>
                        <th>Street Address</th>
                        <th>City</th>
                        <th>State</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Locations.map((location: ILocation, index: number) =>
                            <tr key={"Contact" + index.toString()}>
                                <td>
                                    <a className={styles.foreignVisitorAnchorTag} href="#" onClick={() => { ClickHandler(location) }}>{location.Facility}</a>
                                </td>
                                <td>
                                    {location.StreetAddress}
                                </td>
                                <td>
                                    {location.City}
                                </td>
                                <td>
                                    {location.State}
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
        );
    }
}