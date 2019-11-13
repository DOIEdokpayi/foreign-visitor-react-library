/**
 * @class TelephoneNumbers
 */

import * as React from 'react'
import styles from "../styles.css";
import { ITelephoneNumbersProps } from './ITelephoneNumbersProps';

export default function TelephoneNumbers(props: ITelephoneNumbersProps): React.ReactElement<ITelephoneNumbersProps> {
  const {
    TelephoneNumbers
  } = props;

  return (
    <div className={styles.foreignVisitorComponent}>
      <ul className={"list-unstyled"}>
        {
          TelephoneNumbers.map((telephoneNumber: string, index: number) =>
            <li key={"ForeignVisitorTelephoneNumber" + index.toString()}><a href={"tel:" + telephoneNumber}>{telephoneNumber}</a></li>
          )
        }
      </ul>
    </div>
  );
}
