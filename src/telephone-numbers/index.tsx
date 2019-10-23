/**
 * @class TelephoneNumbers
 */

import * as React from 'react'
import styles from "../styles.css";
import { ITelephoneNumbersProps } from './ITelephoneNumbersProps';

export default class TelephoneNumbers extends React.Component<ITelephoneNumbersProps> {
  render() {
    const {
      TelephoneNumbers
    } = this.props;

    return (
      <div className={styles.foreignVisitorComponent}>
        <ul className={"list-unstyled"}>
        {
          TelephoneNumbers.map((telephoneNumber: string, index: number) =>
            <li key={"ForeignVisitorTelephoneNumber" + index.toString()}><a href={"tel:"+telephoneNumber}>{telephoneNumber}</a></li>
          )
        }
        </ul>
      </div>
    )
  }
}
