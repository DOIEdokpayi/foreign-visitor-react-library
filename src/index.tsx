/**
 * @class ExampleComponent
 */

import * as React from 'react'

import styles from './styles.css'
import TelephoneNumbers from './telephone-numbers'
import EmailAddresses from './email-addresses'
import TermsAndConditions from './terms-conditions'
import { IContact, ILocation, ISponsor, ISponsorFunc, IVisit, IVisitFunc, IVisitor, IVisitorFunc, RequestStatusEnum, ThreatLevelEnum } from './types'


class ExampleComponent extends React.Component {
  render() {
    return (
      <div className={styles.example}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              <h1>Examples of Foreign Visitor React Components</h1>
            </div>
            <div className="col-xs-12">
              <h2>Telephone Numbers</h2>
            </div>
            <div className="col-xs-12">
              <TelephoneNumbers TelephoneNumbers={[
                "+966 011123 4567"
                , "+966 011123 1567"
                , "+966 011123 2567"
                , "+966 011123 3567"
                , "+966 011123 4567"
                , "+966 011123 5567"]} />
            </div>
            <div className="col-xs-12">
              <h2>Email Addresses</h2>
            </div>
            <div className="col-xs-12">
              <EmailAddresses EmailAddresses={[
                "mo.saleh@gmail.com"
                , "msaleh@outlook.com"
                , "mohammedsaleh@yahoo.com"
              ]} />
            </div>
            <div className="col-xs-12">
              <h2>Terms and Conditions</h2>
            </div>
            <div className="col-xs-12">
              <TermsAndConditions
                ErrorHandler={() => <span className="bg-danger">Whoops!</span>}
                IconUrl={"https://en.wikipedia.org/static/images/project-logos/enwiki-2x.png"}
                TermsAccepted={false}
                Redirect={"https://doi.org"}
                SubmitPageFunc={() => <span className="bg-warning">Will not redirect in example!</span>}
                SubmitAction={() => new Promise((resolve) => resolve())} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export { EmailAddresses, ExampleComponent, IContact, ILocation, ISponsor, ISponsorFunc, IVisit, IVisitFunc, IVisitor, IVisitorFunc, RequestStatusEnum, TelephoneNumbers, TermsAndConditions, ThreatLevelEnum }
export default { EmailAddresses, ExampleComponent, RequestStatusEnum, TelephoneNumbers, TermsAndConditions, ThreatLevelEnum };