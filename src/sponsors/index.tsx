/**
 * @class Sponsors
 */

import * as React from 'react'
import { ISponsorProps } from './ISponsorProps';
import { ISponsor } from '../types'
import styles from "../styles.css";

export default function Sponsors(props: ISponsorProps): React.ReactElement<ISponsorProps> {
    const {
        Sponsors,
        ClickHandler
    } = props;
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Telephone</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    Sponsors.map((sponsor: ISponsor, index: number) =>
                        <tr key={"Sponsor" + index.toString()}>
                            <td>
                                <a className={styles.foreignVisitorAnchorTag} href="#" onClick={() => { ClickHandler(sponsor) }}>{sponsor.Name}</a>
                            </td>
                            <td>
                                {sponsor.Telephone}
                            </td>
                            <td>
                                {sponsor.Email}
                            </td>
                        </tr>)
                }
            </tbody>
        </table>
    );
}
