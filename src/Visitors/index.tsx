/**
 * @class Visitors
 */

import * as React from 'react';
import { IVisitor } from '../types'
import styles from "../styles.css";
import { IVisitorProps } from './IVisitorProps';

export default class Visitors extends React.Component<IVisitorProps> {
    public render(): JSX.Element {
        const {
            Visitors,
            ClickHandler
        } = this.props;
        return (
            <table className="table table-hover">
                <thead>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>Place Of Birth</th>
                </thead>
                <tbody>
                    {
                        Visitors.map((visitor: IVisitor, index: number) =>
                            <tr key={"Visitor" + index.toString()}>
                                <td>
                                    <a className={styles.foreignVisitorAnchorTag} href="#" onClick={() => { ClickHandler(visitor) }}>{visitor.LastName}</a>
                                </td>
                                <td>
                                    {visitor.FirstName}
                                </td>
                                <td>
                                    {visitor.PlaceOfBirth}
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
        );
    }
}