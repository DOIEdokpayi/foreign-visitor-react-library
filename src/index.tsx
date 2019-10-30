/**
 * @class ExampleComponent
 */

import * as React from 'react'

import styles from './styles.css'
import TelephoneNumbers from './telephone-numbers'
import EmailAddresses from './email-addresses'
import TermsAndConditions from './terms-conditions'
import { IContact, ILocation, ISponsor, ISponsorFunc, IVisit, IVisitFunc, IVisitor, IVisitorFunc, RequestStatusEnum, ThreatLevelEnum, IErrorHandlerFunc, ITermsAndConditionsFormValues } from './types'
import Loading from './loading'
import Sponsors from './sponsors'
import Visits from './Visits'
import Visitors from './Visitors'
import Contacts from './Contacts'
import Locations from './Locations';


function bootstrap3PreviewContainer(children: JSX.Element): JSX.Element {
  return <div className="container">
    <div className="row">
      <div className="col-xs-12">
        {children}
      </div>
    </div>
  </div>;
}


export { bootstrap3PreviewContainer, Contacts, EmailAddresses,  IContact, IErrorHandlerFunc, ILocation, ISponsor, ISponsorFunc, ITermsAndConditionsFormValues, IVisit, IVisitFunc, IVisitor, IVisitorFunc, Loading, Locations, RequestStatusEnum, Sponsors, styles, TelephoneNumbers, TermsAndConditions, ThreatLevelEnum, Visits, Visitors }
export default { bootstrap3PreviewContainer, Contacts, EmailAddresses, Loading, Locations, RequestStatusEnum, Sponsors, styles, TelephoneNumbers, TermsAndConditions, ThreatLevelEnum, Visits, Visitors };