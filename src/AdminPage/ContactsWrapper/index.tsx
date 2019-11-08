/**
 * @function ContactsWrapper
 */

import * as React from "react";
import { IContactsWrapperProps } from "./IContactsWrapperProps";
import Contacts from "../../Contacts";

export function ContactsWrapper(props: IContactsWrapperProps): React.ReactElement<IContactsWrapperProps> {
    const { Heading, contacts, ClickHandler } = props;
    return contacts ?
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <h3>{Heading}</h3>
                    <Contacts
                        ClickHandler={ClickHandler}
                        Contacts={contacts}
                    />
                </div>
            </div>
        </div>
        : <div style={{ display: "none" }} />;
}