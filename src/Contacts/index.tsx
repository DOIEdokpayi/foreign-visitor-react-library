/**
 * @class Contacts
 */

import * as React from 'react';
import styles from "../styles.css";
import { IContactProps } from './IContactProps';
import { IContact } from '../types';
export default function Contacts(props: IContactProps): React.ReactElement<IContactProps> {
    const {
        Contacts,
        ClickHandler
    } = props;
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>Email</th>
                    <th>Business Phone</th>
                </tr>
            </thead>
            <tbody>
                {
                    Contacts.map((contact: IContact, index: number) =>
                        <tr key={"Contact" + index.toString()}>
                            <td>
                                <a className={styles.foreignVisitorAnchorTag} href="#" onClick={() => { ClickHandler(contact) }}>{contact.LastName}</a>
                            </td>
                            <td>
                                {contact.FirstName}
                            </td>
                            <td>
                                <a href={"mailto:" + contact.EMail}>{contact.EMail}</a>
                            </td>
                            <td>
                                <a href={"tel:" + contact.BusinessPhone}>{contact.BusinessPhone}</a>
                            </td>
                        </tr>)
                }
            </tbody>
        </table>
    );
}