import * as React from 'react';
import { TelephoneNumbers, EmailAddresses, Sponsors, Visits, Loading, Visitors, IVisitor, Contacts, IContact, ILocation, Locations, TermsAndConditions, ITermsAndConditionsFormValues, IResponseFormValues, ISponsor, VisitorsMasterDetail, Wizard, ProgressBar, VisitsMasterDetail } from '.';
import ResponseForm from './ResponseForm';
import AdminPage from './AdminPage';
import { IVisit, IVisitListInformation, SPUserProfile } from './types';
import Confirmation from './Confirmation';
import { NavLink, Route, HashRouter, Switch } from 'react-router-dom';
import ErrorComponent from './ErrorComponent';

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
    Visits={mockVisits}
/>);

export const LoadingComponent = () => (<Loading />);

const mockVisitors = [
    { Id: 1, LEPortalVisitorFirstName: "Mohammed", Title: "Saleh", LEPortalPlaceofBirth: "Riyadh, Saudi Arabia" },
    { Id: 2, LEPortalVisitorFirstName: "Xi", Title: "Ping", LEPortalPlaceofBirth: "Beijing, China" },
    { Id: 3, LEPortalVisitorFirstName: "Malcom", Title: "O'Donnell", LEPortalPlaceofBirth: "Ireland" }
];
export const VisitorsComponent = () => (<Visitors
    Visitors={mockVisitors}
    ClickHandler={(visitor: IVisitor) => alert("You clicked a visitor named:  " + visitor.FirstName + " " + visitor.LastName)}
/>);

const mockContacts = [
    { Id: 1, FirstName: "John", LastName: "Brown", EMail: "john_brown@ios.doi.gov", BusinessPhone: "(202) 345-2299" },
    { Id: 2, FirstName: "JoAnne", LastName: "Simpson", EMail: "joanne_simpson@ios.doi.gov", BusinessPhone: "(703) 321-0622" },
    { Id: 3, FirstName: "Hillary", LastName: "Malliot", EMail: "hillary_malliot@ios.doi.gov", BusinessPhone: "(202) 399-2200" },
    { Id: 4, FirstName: "Tina", LastName: "Practiss", EMail: "tina_practiss@ios.doi.gov", BusinessPhone: "(202) 345-1111" },
];
export const ContactsComponent = () => (<Contacts
    Contacts={mockContacts}
    ClickHandler={(contact: IContact) => alert("You clicked a contact named:  " + contact.FirstName + " " + contact.LastName)}
/>);

const mockLocations = [
    { Id: 1, Title: "Main Interior Building", LEPortalForeignVisitorStreetAddr: "Eighteenth and C Sts. NW", LEPortalForeignVisitorFacilityCi: "Washington", LEPortalUSStatesAndTerritories: "District of Columbia" },
    { Id: 2, Title: "United States Geological Survey HQ", LEPortalForeignVisitorStreetAddr: "12201 Sunrise Valley Dr", LEPortalForeignVisitorFacilityCi: "Reston", LEPortalUSStatesAndTerritories: "Virginia" },
    { Id: 3, Title: "USFWS Partners for Fish and Wildlife Program", LEPortalForeignVisitorStreetAddr: "5275 Leesburg Pike", LEPortalForeignVisitorFacilityCi: "Falls Church", LEPortalUSStatesAndTerritories: "Virginia" },
];
export const LocationsComponent = () => (<Locations
    Locations={mockLocations}
    ClickHandler={(location: ILocation) => alert("You clicked a location named:  " + location.Facility)}
/>);

export const TermsAndConditionsComponent = () => (<TermsAndConditions
    IconUrl={"https://en.wikipedia.org/static/images/project-logos/enwiki-2x.png"}
    TermsAccepted={false}
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

export const ConfirmationComponent = () => (
    <Confirmation
        date={new Date(2020, 0, 23)}
        cc={["jim_brown@ios.doi.gov", "hector_lima@fws.gov", "jane_spencer@usgs.gov"]}
        sponsor="Janine Doektsky" />
);

export const AdminPageComponent = () => (
    <AdminPage
        emailAddressesService={() => new Promise<string[]>(
            (resolve: (emailAddresses: string[]) => void) => {
                setTimeout(() => resolve(mockEmailAddresses), 300)
            }
        )}
        escortsService={() => new Promise<IContact[]>(
            (resolve: (escorts: IContact[]) => void) => {
                setTimeout(() => resolve(mockContacts), 300)
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
        locationsService={() => new Promise<ILocation[]>(
            (resolve: (locations: ILocation[]) => void) => {
                setTimeout(() => resolve(mockLocations), 300)
            }
        )}
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
        telephonesService={() => new Promise<string[]>(
            (resolve: (telephoneNumbers: string[]) => void) => {
                setTimeout(() => resolve(mockTelephoneNumbers), 300)
            }
        )}
        translatorsService={() => new Promise<IContact[]>(
            (resolve: (escorts: IContact[]) => void) => {
                setTimeout(() => resolve(mockContacts), 300)
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

export const VisitorsMasterDetailComponent = () => {
    return <div className="container-fluid wizard-container">
        <div className="row">
            <HashRouter>
                <Switch>
                    <Route exact={true}
                        path={"/"}
                        render={() => <VisitorsMasterDetail
                            Visitors={new Map<string, IVisitor>(mockVisitors.map((visitor: IVisitor, index: number) => [index.toString(), visitor]))}
                            DispatchDelete={(id: string) => alert("Attempted to delete visitor with id: " + id)}
                            EditVisitorUrl="EditVisitorUrl" />} />
                </Switch>
            </HashRouter>
        </div>
    </div>;
}

export const WizardComponent = () => {
    return <Wizard Pages={[{
        Name: "Terms and Conditions",
        Order: 0,
        MatchHash: {
            Hash: "#/",
            Page: "Terms and Conditions"
        },
        RenderNavLink: (index: number) => <NavLink key={"Nav" + index} to={""}>
            Terms and Conditions
                                            </NavLink>,
        RenderRouter: (index: number) => <Route exact={true} key={"Route" + index}
            path={"/"}
            render={() => <h1>Terms and Conditions apply!</h1>} />
    }]} userEmailService={() => new Promise<string>(
        (resolve: (value: string) => void) => {
            setTimeout(() => resolve("john_tester@ios.doi.gov"), 300)
        }
    )} />
}

export const ProgressBarComponent = () => {
    return <ProgressBar Progress={Math.random()} />
}

export const ErrorComponentDemonstration = () => {
    return <ErrorComponent errorMessage="Error message goes here..." />
}

export const VisitsMasterDetailComponent = () => {
    return <div className="container-fluid wizard-container">
        <div className="row">
            <HashRouter>
                <Switch>
                    <Route exact={true}
                        path={"/"}
                        render={() => <VisitsMasterDetail
                            EarliestArrivalDate={new Date}
                            Redirect="redirect"
                            listItemEntityTypeFullName="list item entity type"
                            DispatchDelete={(id: string) => alert("Attempted to delete visitor with id: " + id)}
                            DispatchAttachment={(attachments: FileList) => console.log(attachments)}
                            DispatchVisitInfo={(visitInfo: IVisitListInformation) => console.log(visitInfo)}
                            userProfileService={() => {
                                return new Promise<SPUserProfile>(
                                    ((resolve: (value: SPUserProfile) => void) => {
                                        setTimeout(() => {
                                            resolve({
                                                AccountName: "doi\\test",
                                                DisplayName: "Test",
                                                Email: "test@ios.doi.gov",
                                                ExtendedManagers: {
                                                    results: ["OCIO", "OLES"]
                                                },
                                                ExtendedReports: {
                                                    results: "",
                                                    __metadata: {}
                                                },
                                                IsFollowed: false,
                                                LatestPost: "",
                                                Peers: {
                                                    results: ["tester1", "tester2"],
                                                    __metadata: {}
                                                },
                                                PersonalUrl: "https://doi.gov",
                                                PictureUrl: "https://doi.gov",
                                                Title: "test",
                                                UserProfileProperties: {
                                                    results: [],
                                                    UserUrl: "https://doi.gov"
                                                },
                                                UserUrl: "https://doi.gov",
                                                __metadata: {}

                                            });
                                        }, 300)
                                    })
                                );
                            }}
                        />} />

                </Switch>
            </HashRouter>
        </div>
    </div>;
}