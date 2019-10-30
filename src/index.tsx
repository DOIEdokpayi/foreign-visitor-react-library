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

function ExampleComponent(): JSX.Element {
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
            <h2>Sponsors</h2>
          </div>
          <div className="col-xs-12">
            <Sponsors
              Sponsors={[
                { Name: "John Doe", Telephone: "(703) 987-1234", Email: "john_doe@ios.doi.com" },
                { Name: "Jane Doe", Telephone: "(703) 987-0234", Email: "jane_doe@ios.doi.com" },
                { Name: "John Q Public", Telephone: "(703) 987-0934", Email: "john_public@ios.doi.com" }
              ]}
              ClickHandler={(sponsor: ISponsor) => alert("You clicked: " + sponsor.Name)}
            />
          </div>
          <div className="col-xs-12">
            <h2>Visits Admin View</h2>
          </div>
          <div className="col-xs-12">
            <Visits
              ClickHandler={(visit: IVisit) => alert("You clicked a visit starting on:  " + visit.ArrivalDate.toString())}
              IsAdmin={true}
              Visits={[
                { ArrivalDate: new Date(2019, 11, 1), DepartureDate: new Date(2019, 11, 2), DownloadLink: "https://www.nps.gov/nationalmallplan/Maps/NMMParks_map.pdf" },
                { ArrivalDate: new Date(2019, 12, 1), DepartureDate: new Date(2019, 12, 2), DownloadLink: "https://www.nps.gov/nationalmallplan/Maps/NMMParks_map.pdf" },
                { ArrivalDate: new Date(2020, 1, 10), DepartureDate: new Date(2020, 1, 11), DownloadLink: "https://www.nps.gov/nationalmallplan/Maps/NMMParks_map.pdf" },
              ]}

            />
          </div>
          <div className="col-xs-12">
            <h2>Visits User View</h2>
          </div>
          <div className="col-xs-12">
            <Visits
              ClickHandler={(visit: IVisit) => alert("You clicked a visit starting on:  " + visit.ArrivalDate.toString())}
              IsAdmin={false}
              Visits={[
                { ArrivalDate: new Date(2019, 11, 1), DepartureDate: new Date(2019, 11, 2), DownloadLink: "https://www.nps.gov/nationalmallplan/Maps/NMMParks_map.pdf" },
                { ArrivalDate: new Date(2019, 12, 1), DepartureDate: new Date(2019, 12, 2), DownloadLink: "https://www.nps.gov/nationalmallplan/Maps/NMMParks_map.pdf" },
                { ArrivalDate: new Date(2020, 1, 10), DepartureDate: new Date(2020, 1, 11), DownloadLink: "https://www.nps.gov/nationalmallplan/Maps/NMMParks_map.pdf" },
              ]}

            />
          </div>
          <div className="col-xs-12">
            <h2>Visitors</h2>
          </div>
          <div className="col-xs-12">
            <Visitors
              Visitors={[
                { FirstName: "Mohammed", LastName: "Saleh", PlaceOfBirth: "Riyadh, Saudi Arabia" },
                { FirstName: "Xi", LastName: "Ping", PlaceOfBirth: "Beijing, China" },
                { FirstName: "Malcom", LastName: "O'Donnell", PlaceOfBirth: "Ireland" }

              ]}
              ClickHandler={(visitor: IVisitor) => alert("You clicked a visitor named:  " + visitor.FirstName + " " + visitor.LastName)}
            />
          </div>
          <div className="col-xs-12">
            <h2>Contacts</h2>
          </div>
          <div className="col-xs-12">
            <Contacts
              Contacts={[
                { FirstName: "John", LastName: "Brown", EMail: "john_brown@ios.doi.gov", BusinessPhone: "(202) 345-2299" },
                { FirstName: "JoAnne", LastName: "Simpson", EMail: "joanne_simpson@ios.doi.gov", BusinessPhone: "(703) 321-0622" },
                { FirstName: "Hillary", LastName: "Malliot", EMail: "hillary_malliot@ios.doi.gov", BusinessPhone: "(202) 399-2200" },
                { FirstName: "Tina", LastName: "Practiss", EMail: "tina_practiss@ios.doi.gov", BusinessPhone: "(202) 345-1111" },

              ]}
              ClickHandler={(contact: IContact) => alert("You clicked a contact named:  " + contact.FirstName + " " + contact.LastName)}
            />
          </div>
          <div className="col-xs-12">
            <h2>Locations</h2>
          </div>
          <div className="col-xs-12">
            <Locations
              Locations={[
                { Facility: "Main Interior Building", StreetAddress: "Eighteenth and C Sts. NW", City: "Washington", State: "District of Columbia" },
                { Facility: "United States Geological Survey HQ", StreetAddress: "12201 Sunrise Valley Dr", City: "Reston", State: "Virginia" },
                { Facility: "USFWS Partners for Fish and Wildlife Program", StreetAddress: "5275 Leesburg Pike", City: "Falls Church", State: "Virginia" },
              ]}
              ClickHandler={(location: ILocation) => alert("You clicked a location named:  " + location.Facility)}
            />
          </div>
          <div className="col-xs-12">
            <h2>Terms and Conditions</h2>
          </div>
          <div className="col-xs-12">
            <TermsAndConditions
              IconUrl={"https://en.wikipedia.org/static/images/project-logos/enwiki-2x.png"}
              TermsAccepted={false}
              Redirect={"https://doi.org"}

              SubmitActionFunc={(formData: ITermsAndConditionsFormValues) => {
                if (formData.TermsAccepted) {
                  alert("Terms and conditions accepted!");
                }
              }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export { Contacts, EmailAddresses, ExampleComponent, IContact, IErrorHandlerFunc, ILocation, ISponsor, ISponsorFunc, ITermsAndConditionsFormValues, IVisit, IVisitFunc, IVisitor, IVisitorFunc, Loading, RequestStatusEnum, Sponsors, TelephoneNumbers, TermsAndConditions, ThreatLevelEnum, Visits, Visitors }
export default { Contacts, EmailAddresses, ExampleComponent, Loading, RequestStatusEnum, Sponsors, TelephoneNumbers, TermsAndConditions, ThreatLevelEnum, Visits, Visitors };