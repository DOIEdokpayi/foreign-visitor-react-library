/**
 * @class EmailAddresses
 */

import * as React from 'react';
import styles from "../styles.css";
import { IEmailAddressesProps } from './IEmailAddressesProps'

export default class EmailAddresses extends React.Component<IEmailAddressesProps> {
  render() {
    const {
      EmailAddresses
    } = this.props

    return (
      <div className={styles.foreignVisitorComponent}>
         <ul className={"list-unstyled"}>
        {
          EmailAddresses.map((emailAddress: string, index: number) =>
            <li key={"ForeignVisitorEmailAddresses" + index.toString()}><a href={"mailto:"+emailAddress}>{emailAddress}</a></li>
          )
        }
        </ul>
      </div>
    )
  }
}
