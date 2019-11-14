/**
 * @class ExampleComponent
 */

import * as React from 'react'
import Confirmation from "./Confirmation"
import Contacts from './Contacts'
import EmailAddresses from './email-addresses'
import ErrorComponent from "./ErrorComponent";
import Loading from './loading'
import Locations from './Locations'
import ProgressBar from "./ProgressBar"
import { IResponseFormValues } from './ResponseForm/IResponseFormValues'
import Sponsors from './sponsors'
import styles from './styles.css'
import TelephoneNumbers from './telephone-numbers'
import TermsAndConditions from './termsAndConditions'
import { IContact, IErrorHandlerFunc, ILocation, ISponsor, ISponsorFunc, ITermsAndConditionsFormValues, IVisit, IVisitFunc, IVisitor, IVisitorFunc, RequestStatusEnum, ThreatLevelEnum } from './types'
import Visitors from './Visitors'
import VisitorsMasterDetail from "./VisitorsMasterDetail"
import VisitsMasterDetail from "./VisitsMasterDetail";
import Visits from './Visits'
import Wizard from "./Wizard"



function bootstrap3PreviewContainer(children: JSX.Element): JSX.Element {
  return <div className="container">
    <div className="row">
      <div className="col-xs-12">
        {children}
      </div>
    </div>
  </div>;
}


export { bootstrap3PreviewContainer, Confirmation, Contacts, EmailAddresses, ErrorComponent, IContact, IErrorHandlerFunc, ILocation, IResponseFormValues, ISponsor, ISponsorFunc, ITermsAndConditionsFormValues, IVisit, IVisitFunc, IVisitor, IVisitorFunc, Loading, Locations, RequestStatusEnum, ProgressBar, Sponsors, styles, TelephoneNumbers, TermsAndConditions, ThreatLevelEnum, Visits, Visitors, VisitorsMasterDetail, VisitsMasterDetail, Wizard }
export default { bootstrap3PreviewContainer, Confirmation, Contacts, EmailAddresses, ErrorComponent, Loading, Locations, ProgressBar, RequestStatusEnum, Sponsors, styles, TelephoneNumbers, TermsAndConditions, ThreatLevelEnum, Visits, Visitors, VisitorsMasterDetail, VisitsMasterDetail, Wizard };