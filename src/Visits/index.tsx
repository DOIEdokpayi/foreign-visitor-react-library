/**
 * @class Visits
 */

import * as React from 'react'
import styles from "../styles.css";
import { IVisitsProps } from './IVisitsProps';
import { IVisit } from '../types';
import { printDate } from '../printDate';

export default function Visits(props: IVisitsProps): React.ReactElement<IVisitsProps> {
    const {
        IsAdmin,
        Visits,
        ClickHandler,
        SelectHandler
    } = props;
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Arrival Date</th>
                    <th>Departure Date</th>
                    <th>Download</th>
                    {IsAdmin ? <th>Respond</th> : undefined}
                </tr>
            </thead>
            <tbody>
                {
                    Visits.map((visit: IVisit, index: number) =>
                        <tr key={"Visit" + index.toString()}>
                            <td>
                                <a href="#" onClick={() => SelectHandler(visit)}>{printDate(visit.ArrivalDate)}</a>
                            </td>
                            <td>
                                {printDate(visit.DepartureDate)}
                            </td>
                            <td>
                                <a href={visit.DownloadLink}><i className={"fa fa-paperclip " + styles.foreignVisitorAnchorTag} aria-hidden="true"></i></a>
                            </td>
                            {
                                IsAdmin ?
                                    <td>
                                        <a href="#" onClick={() => ClickHandler(visit)}><i className={"fa fa-reply " + styles.foreignVisitorAnchorTag} aria-hidden="true"></i></a>
                                    </td> : undefined
                            }
                        </tr>)
                }
            </tbody>
        </table>
    );
}