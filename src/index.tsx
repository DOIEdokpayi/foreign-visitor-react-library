/**
 * @class ExampleComponent
 */

import * as React from 'react'

import styles from './styles.css'
import TelephoneNumbers from './telephone-numbers'
import EmailAddresses from './email-addresses'
import TermsAndConditions from './termsAndConditions'
import { IContact, ILocation, ISponsor, ISponsorFunc, IVisit, IVisitFunc, IVisitor, IVisitorFunc, RequestStatusEnum, ThreatLevelEnum, IErrorHandlerFunc, ITermsAndConditionsFormValues } from './types'
import Loading from './loading'
import Sponsors from './sponsors'
import Visits from './Visits'
import Visitors from './Visitors'
import Confirmation from "./Confirmation";
import Contacts from './Contacts'
import Locations from './Locations';
import ProgressBar from "./ProgressBar";
import VisitorsMasterDetail from "./VisitorsMasterDetail";

import { IResponseFormValues } from './ResponseForm/IResponseFormValues'


function bootstrap3PreviewContainer(children: JSX.Element): JSX.Element {
  return <div className="container">
    <div className="row">
      <div className="col-xs-12">
        {children}
      </div>
    </div>
  </div>;
}


export { bootstrap3PreviewContainer, Confirmation, Contacts, EmailAddresses, IContact, IErrorHandlerFunc, ILocation, IResponseFormValues, ISponsor, ISponsorFunc, ITermsAndConditionsFormValues, IVisit, IVisitFunc, IVisitor, IVisitorFunc, Loading, Locations, RequestStatusEnum, ProgressBar, Sponsors, styles, TelephoneNumbers, TermsAndConditions, ThreatLevelEnum, Visits, Visitors, VisitorsMasterDetail }
export default { bootstrap3PreviewContainer, Confirmation, Contacts, EmailAddresses, Loading, Locations, ProgressBar, RequestStatusEnum, Sponsors, styles, TelephoneNumbers, TermsAndConditions, ThreatLevelEnum, Visits, Visitors, VisitorsMasterDetail };