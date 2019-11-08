import * as React from 'react';
import { TelephoneNumbers, EmailAddresses, Sponsors, Visits, Loading, Visitors, IVisitor, Contacts, IContact, ILocation, Locations, TermsAndConditions, ITermsAndConditionsFormValues, IResponseFormValues, ISponsor } from '.';
import ResponseForm from './ResponseForm';
import { AdminPage } from './AdminPage';
import { IVisit } from './types';

export default { title: 'Foreign Visitor React Components' };

const mockTelephoneNumbers = [
    "+966 011123 4567",
    "+966 011123 1567",
    "+966 011123 2567",
    "+966 011123 3567",
    "+966 011123 4567",
    "+966 011123 5567"
];
export const TelephoneNumberComponent = () => (<TelephoneNumbers TelephoneNumbers={mockTelephoneNumbers} />);

const mockEmailAddresses = [
    "mo.saleh@gmail.com",
    "msaleh@outlook.com",
    "mohammedsaleh@yahoo.com"
];
export const EmailAddressComponent = () => (
    <EmailAddresses EmailAddresses={mockEmailAddresses} />
);

const mockSponsors = [
    { Id: 1, Name: "John Doe", Telephone: "(703) 987-1234", Email: "john_doe@ios.doi.com" },
    { Id: 2, Name: "Jane Doe", Telephone: "(703) 987-0234", Email: "jane_doe@ios.doi.com" },
    { Id: 3, Name: "John Q Public", Telephone: "(703) 987-0934", Email: "john_public@ios.doi.com" }
];
export const SponsorsComponent = () => (
    <Sponsors
        Sponsors={mockSponsors}
        ClickHandler={(sponsor) => alert("You clicked: " + sponsor.Name)}
    />);

const mockVisits = [
    { Id: 1, ArrivalDate: new Date(2019, 11, 1), DepartureDate: new Date(2019, 11, 2), DownloadLink: "https://www.nps.gov/nationalmallplan/Maps/NMMParks_map.pdf" },
    { Id: 2, ArrivalDate: new Date(2019, 12, 1), DepartureDate: new Date(2019, 12, 2), DownloadLink: "https://www.nps.gov/nationalmallplan/Maps/NMMParks_map.pdf" },
    { Id: 3, ArrivalDate: new Date(2020, 1, 10), DepartureDate: new Date(2020, 1, 11), DownloadLink: "https://www.nps.gov/nationalmallplan/Maps/NMMParks_map.pdf" },
];
export const VisitsAdminView = () => (<Visits
    ClickHandler={(visit) => alert("You clicked a visit starting on:  " + visit.ArrivalDate.toString())}
    IsAdmin={true}
    SelectHandler={(visit) => alert("You selected a visit starting on:  " + visit.ArrivalDate.toString())}
    Visits={mockVisits} />);

export const VisitsUserView = () => (<Visits
    ClickHandler={(visit) => alert("You clicked a visit starting on:  " + visit.ArrivalDate.toString())}
    IsAdmin={false}
    SelectHandler={(visit) => alert("You selected a visit starting on:  " + visit.ArrivalDate.toString())}

    Visits={[
        { Id: 1, ArrivalDate: new Date(2019, 11, 1), DepartureDate: new Date(2019, 11, 2), DownloadLink: "https://www.nps.gov/nationalmallplan/Maps/NMMParks_map.pdf" },
        { Id: 2, ArrivalDate: new Date(2019, 12, 1), DepartureDate: new Date(2019, 12, 2), DownloadLink: "https://www.nps.gov/nationalmallplan/Maps/NMMParks_map.pdf" },
        { Id: 3, ArrivalDate: new Date(2020, 1, 10), DepartureDate: new Date(2020, 1, 11), DownloadLink: "https://www.nps.gov/nationalmallplan/Maps/NMMParks_map.pdf" },
    ]}
/>);

export const LoadingComponent = () => (<Loading />);

const mockVisitors = [
    { Id: 1, FirstName: "Mohammed", LastName: "Saleh", PlaceOfBirth: "Riyadh, Saudi Arabia" },
    { Id: 2, FirstName: "Xi", LastName: "Ping", PlaceOfBirth: "Beijing, China" },
    { Id: 3, FirstName: "Malcom", LastName: "O'Donnell", PlaceOfBirth: "Ireland" }
];
export const VisitorsComponent = () => (<Visitors
    Visitors={mockVisitors}
    ClickHandler={(visitor: IVisitor) => alert("You clicked a visitor named:  " + visitor.FirstName + " " + visitor.LastName)}
/>);

export const ContactsComponent = () => (<Contacts
    Contacts={[
        { Id: 1, FirstName: "John", LastName: "Brown", EMail: "john_brown@ios.doi.gov", BusinessPhone: "(202) 345-2299" },
        { Id: 2, FirstName: "JoAnne", LastName: "Simpson", EMail: "joanne_simpson@ios.doi.gov", BusinessPhone: "(703) 321-0622" },
        { Id: 3, FirstName: "Hillary", LastName: "Malliot", EMail: "hillary_malliot@ios.doi.gov", BusinessPhone: "(202) 399-2200" },
        { Id: 4, FirstName: "Tina", LastName: "Practiss", EMail: "tina_practiss@ios.doi.gov", BusinessPhone: "(202) 345-1111" },

    ]}
    ClickHandler={(contact: IContact) => alert("You clicked a contact named:  " + contact.FirstName + " " + contact.LastName)}
/>);

export const LocationsComponent = () => (<Locations
    Locations={[
        { Id: 1, Facility: "Main Interior Building", StreetAddress: "Eighteenth and C Sts. NW", City: "Washington", State: "District of Columbia" },
        { Id: 2, Facility: "United States Geological Survey HQ", StreetAddress: "12201 Sunrise Valley Dr", City: "Reston", State: "Virginia" },
        { Id: 3, Facility: "USFWS Partners for Fish and Wildlife Program", StreetAddress: "5275 Leesburg Pike", City: "Falls Church", State: "Virginia" },
    ]}
    ClickHandler={(location: ILocation) => alert("You clicked a location named:  " + location.Facility)}
/>);

export const TermsAndConditionsComponent = () => (<TermsAndConditions
    IconUrl={"https://en.wikipedia.org/static/images/project-logos/enwiki-2x.png"}
    TermsAccepted={false}
    Redirect={"https://doi.org"}

    SubmitActionFunc={(formData: ITermsAndConditionsFormValues) => {
        if (formData.TermsAccepted) {
            alert("Terms and conditions accepted!");
        }
    }} />);


export const ResponseFormComponent = () => (
    <ResponseForm SubmitPageFunc={(values: IResponseFormValues) => {
        alert("data submitted is " + JSON.stringify(values))
    }} />
);

export const AdminPageComponent = () => (
    <AdminPage
        emailAddressesService={()=> new Promise<string[]>(
            (resolve:(emailAddresses:string[])=>void)=>{
                setTimeout(()=>resolve(mockEmailAddresses), 300)
            }
        )}
        IsAdmin={true}
        getResponseFormValuesService={(sponsor: ISponsor, visit: IVisit) => new Promise<IResponseFormValues>(
            (resolve: (responseForm: IResponseFormValues) => void) => {
                setTimeout(() => resolve({
                    approvalauthoritysignature: "Idaho Edokpayi",
                    authorityemail: "idaho_edokayi@ios.doi.gov",
                    email: sponsor.Email,
                    subject: "Visit starting on " + visit.ArrivalDate.toDateString()
                }), 300)
            })}
        saveResponseFormValuesService={() => new Promise<void>(
            (resolve: () => void) => {
                setTimeout(resolve, 300);
            }
        )}
        sponsorsService={() => new Promise<ISponsor[]>(
            (resolve: (sponsors: ISponsor[]) => void) => {
                setTimeout(() =>
                    resolve(mockSponsors), 300)
            })}
        telephonesService={()=> new Promise<string[]>(
                (resolve:(telephoneNumbers:string[])=>void)=>{
                    setTimeout(()=>resolve(mockTelephoneNumbers), 300)
                }
            )}
        visitorsService={() => new Promise<IVisitor[]>(
            (resolve: (visitors: IVisitor[]) => void) => {
                setTimeout(() =>
                    resolve(mockVisitors), 300)
            }
        )}
        visitsService={() => new Promise<IVisit[]>(
            (resolve: (visits: IVisit[]) => void) => {
                setTimeout(() =>
                    resolve(mockVisits), 300)
            })} />
);