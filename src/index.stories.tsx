import * as React from 'react';
import { TelephoneNumbers, EmailAddresses, Sponsors, Visits, Loading, Visitors, IVisitor, Contacts, IContact, ILocation, Locations, TermsAndConditions, ITermsAndConditionsFormValues, IResponseFormValues } from '.';
import ResponseForm from './ResponseForm';


export default { title: 'Foreign Visitor React Components' };

export const TelephoneNumberComponent = () =>(<TelephoneNumbers TelephoneNumbers={[
        "+966 011123 4567"
        , "+966 011123 1567"
        , "+966 011123 2567"
        , "+966 011123 3567"
        , "+966 011123 4567"
, "+966 011123 5567"]} />);

export const EmailAddressComponent = () => (
    <EmailAddresses EmailAddresses={[
        "mo.saleh@gmail.com"
        , "msaleh@outlook.com"
        , "mohammedsaleh@yahoo.com"
    ]} />
);

export const SponsorsComponent = () => (
    <Sponsors
        Sponsors={[
            { Name: "John Doe", Telephone: "(703) 987-1234", Email: "john_doe@ios.doi.com" },
            { Name: "Jane Doe", Telephone: "(703) 987-0234", Email: "jane_doe@ios.doi.com" },
            { Name: "John Q Public", Telephone: "(703) 987-0934", Email: "john_public@ios.doi.com" }
        ]}
        ClickHandler={(sponsor) => alert("You clicked: " + sponsor.Name)}
    />);

export const VisitsAdminView = () => (<Visits
    ClickHandler={(visit) => alert("You clicked a visit starting on:  " + visit.ArrivalDate.toString())}
    IsAdmin={true}
    Visits={[
        { ArrivalDate: new Date(2019, 11, 1), DepartureDate: new Date(2019, 11, 2), DownloadLink: "https://www.nps.gov/nationalmallplan/Maps/NMMParks_map.pdf" },
        { ArrivalDate: new Date(2019, 12, 1), DepartureDate: new Date(2019, 12, 2), DownloadLink: "https://www.nps.gov/nationalmallplan/Maps/NMMParks_map.pdf" },
        { ArrivalDate: new Date(2020, 1, 10), DepartureDate: new Date(2020, 1, 11), DownloadLink: "https://www.nps.gov/nationalmallplan/Maps/NMMParks_map.pdf" },
    ]} />);

export const VisitsUserView = () => (<Visits
    ClickHandler={(visit) => alert("You clicked a visit starting on:  " + visit.ArrivalDate.toString())}
    IsAdmin={false}
    Visits={[
        { ArrivalDate: new Date(2019, 11, 1), DepartureDate: new Date(2019, 11, 2), DownloadLink: "https://www.nps.gov/nationalmallplan/Maps/NMMParks_map.pdf" },
        { ArrivalDate: new Date(2019, 12, 1), DepartureDate: new Date(2019, 12, 2), DownloadLink: "https://www.nps.gov/nationalmallplan/Maps/NMMParks_map.pdf" },
        { ArrivalDate: new Date(2020, 1, 10), DepartureDate: new Date(2020, 1, 11), DownloadLink: "https://www.nps.gov/nationalmallplan/Maps/NMMParks_map.pdf" },
    ]}
/>);

export const LoadingComponent = () => (<Loading />);

export const VisitorsComponent = () => (<Visitors
    Visitors={[
        { FirstName: "Mohammed", LastName: "Saleh", PlaceOfBirth: "Riyadh, Saudi Arabia" },
        { FirstName: "Xi", LastName: "Ping", PlaceOfBirth: "Beijing, China" },
        { FirstName: "Malcom", LastName: "O'Donnell", PlaceOfBirth: "Ireland" }

    ]}
    ClickHandler={(visitor: IVisitor) => alert("You clicked a visitor named:  " + visitor.FirstName + " " + visitor.LastName)}
/>);

export const ContactsComponent = () => (<Contacts
    Contacts={[
        { FirstName: "John", LastName: "Brown", EMail: "john_brown@ios.doi.gov", BusinessPhone: "(202) 345-2299" },
        { FirstName: "JoAnne", LastName: "Simpson", EMail: "joanne_simpson@ios.doi.gov", BusinessPhone: "(703) 321-0622" },
        { FirstName: "Hillary", LastName: "Malliot", EMail: "hillary_malliot@ios.doi.gov", BusinessPhone: "(202) 399-2200" },
        { FirstName: "Tina", LastName: "Practiss", EMail: "tina_practiss@ios.doi.gov", BusinessPhone: "(202) 345-1111" },

    ]}
    ClickHandler={(contact: IContact) => alert("You clicked a contact named:  " + contact.FirstName + " " + contact.LastName)}
/>);

export const LocationsComponent =() =>(<Locations
    Locations={[
      { Facility: "Main Interior Building", StreetAddress: "Eighteenth and C Sts. NW", City: "Washington", State: "District of Columbia" },
      { Facility: "United States Geological Survey HQ", StreetAddress: "12201 Sunrise Valley Dr", City: "Reston", State: "Virginia" },
      { Facility: "USFWS Partners for Fish and Wildlife Program", StreetAddress: "5275 Leesburg Pike", City: "Falls Church", State: "Virginia" },
    ]}
    ClickHandler={(location: ILocation) => alert("You clicked a location named:  " + location.Facility)}
  />);

  export const TermsAndConditionsComponent = ()=>( <TermsAndConditions
    IconUrl={"https://en.wikipedia.org/static/images/project-logos/enwiki-2x.png"}
    TermsAccepted={false}
    Redirect={"https://doi.org"}

    SubmitActionFunc={(formData: ITermsAndConditionsFormValues) => {
      if (formData.TermsAccepted) {
        alert("Terms and conditions accepted!");
      }
    }} />);


    export const ResponseFormComponent = ()=>(
        <ResponseForm  SubmitPageFunc={(values:IResponseFormValues) => {
            alert("data submitted is " + JSON.stringify(values))
        }} />
    )