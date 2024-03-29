/**
 * @class Visitors
 */

import * as React from 'react';
import { IVisitor } from '../types'
import styles from "../styles.css";
import { IVisitorProps } from './IVisitorProps';

export default function Visitors(props: IVisitorProps): React.ReactElement<IVisitorProps> {
    const {
        Visitors,
        ClickHandler
    } = props;
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>Place Of Birth</th>
                </tr>
            </thead>
            <tbody>
                {
                    Visitors.map((visitor: IVisitor, index: number) =>
                        <tr key={"Visitor" + index.toString()}>
                            <td>
                                <a className={styles.foreignVisitorAnchorTag} href="#" onClick={() => { ClickHandler(visitor) }}>{visitor.Title}</a>
                            </td>
                            <td>
                                {visitor.LEPortalVisitorFirstName}
                            </td>
                            <td>
                                {visitor.LEPortalPlaceofBirth}
                            </td>
                        </tr>)
                }
            </tbody>
        </table>
    );
}