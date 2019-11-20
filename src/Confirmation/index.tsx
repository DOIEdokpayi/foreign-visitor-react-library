/**
 * @function Confirmation
 */

import * as React from 'react';
import styles from "../styles.css";
import { IConfirmationProps } from './IConfirmationProps';
import { printDate } from '../printDate';
export default function Confirmation(props: IConfirmationProps): React.ReactElement<IConfirmationProps> {
    const { date: arrivalDate, cc, sponsor } = props;
    return <div className={styles.confirmationtext + " container-fluid bg-success"}>
        <div className="row">
            <div className="col-sm-12">
                <h1>Feedback Submitted Successfully</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-4"><h2>Sponsor</h2></div>
            <div className="col-sm-8"><h2>{sponsor}</h2></div>

            <div className="col-sm-4"><h2>Date</h2></div>
            <div className="col-sm-8"><h2>{printDate(arrivalDate)}</h2></div>

            {
                cc ?
                    cc.map((email: string, index: number) => <React.Fragment key={"confirmationCC" + index}>
                        <div className="col-sm-4"><h2>CC</h2></div>
                        <div className="col-sm-8"><h2>{email}</h2></div>

                    </React.Fragment>) : undefined
            }
        </div>
    </div>
}