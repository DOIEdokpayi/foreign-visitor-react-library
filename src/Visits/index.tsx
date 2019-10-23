/**
 * @class Visits
 */

import * as React from 'react'
import styles from "../styles.css";
import { IVisitsProps } from './IVisitsProps';
import { IVisit } from '../types';
import { printDate } from '../printDate';

export default class Visits extends React.Component<IVisitsProps> {
    public render(): JSX.Element {
        const {
            Visits,
            ClickHandler
        } = this.props;
        return (
            <table className="table table-hover">
                <thead>
                    <th>Arrival Date</th>
                    <th>Departure Date</th>
                    <th>Download</th>
                    <th>Respond</th>
                </thead>
                <tbody>
                    {
                        Visits.map((visit: IVisit, index: number) =>
                            <tr key={"Visit" + index.toString()}>
                                <td>
                                    {printDate(visit.ArrivalDate)}
                                </td>
                                <td>
                                    {printDate(visit.DepartureDate)}
                                </td>
                                <td>
                                    <a href={visit.DownloadLink}><i className={"fa fa-paperclip " + styles.foreignVisitorAnchorTag} aria-hidden="true"></i></a>
                                </td>
                                <td>
                                    <a href="#" onClick={() => ClickHandler(visit)}><i className={"fa fa-reply " + styles.foreignVisitorAnchorTag} aria-hidden="true"></i></a>
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
        );
    }
}