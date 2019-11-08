/**
 * @class AdminPageImpl
 */

import * as React from "react";
import Modal from 'react-responsive-modal';
import Loading from "../loading";
import ResponseForm from "../ResponseForm";
import { IResponseFormValues } from "../ResponseForm/IResponseFormValues";
import Sponsors from "../sponsors";
import { ISponsor, IVisit, IVisitor, IContact, ILocation, IContactFunc } from "../types";
import { IAdminPageImplProps } from "./IAdminPageImplProps";
import { IAdminPageImplState } from "./IAdminPageImplState";
import { VisitorsWrapper } from "./VisitorsWrapper";
import { VisitsWrapper } from "./VisitsWrapper";
import TelephoneNumbers from "../telephone-numbers";
import EmailAddresses from "../email-addresses";
import { LocationsWrapper } from "./LocationsWrapper";
import { ContactsWrapper } from "./ContactsWrapper";

export class AdminPageImpl extends React.Component<IAdminPageImplProps, IAdminPageImplState>  {
    private contactHandlerFunc: IContactFunc;
    private contactHandler(contact: IContact): void {
        const url = "https://www.linkedin.com/search/results/all/?keywords=" + contact.FirstName + "%20" + contact.LastName;
        window.open(url);
    }
    private closeVisitorInfoFunc: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    private visitorInfoCloseFunc: () => void;
    private closeVisitorInfo(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        this.visitorInfoClose();
        event.preventDefault();
    }
    private visitorInfoClose(): void {
        this.setState({ showVisitorInfo: false });
    }
    private closeResponseFormFunc: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    private responseFormCloseFunc: () => void;
    private closeResponseForm(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        this.responseFormClose();
        event.preventDefault();
    }
    private responseFormClose(): void {
        this.setState({ showResponseForm: false });
    }
    constructor(props: IAdminPageImplProps) {
        super(props);
        this.state = {};
        this.closeResponseFormFunc = this.closeResponseForm.bind(this);
        this.responseFormCloseFunc = this.responseFormClose.bind(this);
        this.closeVisitorInfoFunc = this.closeVisitorInfo.bind(this);
        this.visitorInfoCloseFunc = this.visitorInfoClose.bind(this);
        this.contactHandlerFunc = this.contactHandler.bind(this);
    }
    public componentDidMount(): void {
        const { handleError, sponsorsService } = this.props;
        sponsorsService()
            .then((sponsors: ISponsor[]) => this.setState({ sponsors: sponsors }))
            .catch(handleError);
    }
    public render(): React.ReactElement<IAdminPageImplProps> {
        const { emailAddressesService, escortsService, handleError, IsAdmin, getResponseFormValuesService, locationsService, telephonesService, translatorsService, saveResponseFormValuesService, visitorsService } = this.props;
        const { emailAddresses, escorts, locations, showResponseForm, showVisitorInfo, sponsors, telephoneNumbers, translators, visitors, visits } = this.state;
        return sponsors ?
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 colxs-12">
                        <h2>Sponsors</h2>
                        <Sponsors
                            Sponsors={sponsors}
                            ClickHandler={(sponsor: ISponsor) => {
                                const { visitsService } = this.props;
                                this.setState({ selectedSponsor: sponsor });
                                visitsService(sponsor.Id)
                                    .then((visits: IVisit[]) => this.setState({ visits: visits }))
                                    .catch(handleError);
                            }} />
                    </div>
                    <div className="col-md-4 colxs-12">
                        <VisitsWrapper
                            ClickHandler={(visit: IVisit) => {
                                const { selectedSponsor } = this.state;
                                getResponseFormValuesService(selectedSponsor as ISponsor, visit)
                                    .then((responseFormData: IResponseFormValues) =>
                                        this.setState({
                                            responseFormData: responseFormData,
                                            showResponseForm: true
                                        })
                                    );
                            }
                            }
                            IsAdmin={IsAdmin}
                            SelectHandler={(visit: IVisit) => {
                                escortsService(visit.Id)
                                    .then((escortContacts: IContact[]) => this.setState({ escorts: escortContacts }))
                                    .catch(handleError);
                                translatorsService(visit.Id)
                                    .then((translatorContacts: IContact[]) => this.setState({ translators: translatorContacts }))
                                    .catch(handleError);
                                locationsService(visit.Id)
                                    .then((locationInformation: ILocation[]) => this.setState({ locations: locationInformation }))
                                    .catch(handleError);
                                visitorsService(visit.Id)
                                    .then((visitors: IVisitor[]) => this.setState({ visitors: visitors }))
                                    .catch(handleError);
                            }
                            }
                            visits={visits} />
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <VisitorsWrapper
                            ClickHandler={(visitor: IVisitor) => {
                                emailAddressesService(visitor.Id)
                                    .then((emails: string[]) => this.setState({ emailAddresses: emails }))
                                    .catch(handleError);

                                telephonesService(visitor.Id)
                                    .then((telephones: string[]) => this.setState({ telephoneNumbers: telephones }))
                                    .catch(handleError);
                                this.setState({
                                    selectedVisitor: visitor,
                                    showVisitorInfo: true
                                });

                            }}
                            visitors={visitors} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 colxs-12">
                        <LocationsWrapper
                            locations={locations}
                            ClickHandler={(location: ILocation) => {
                                const streetAddressInfo = location.StreetAddress.split(" ").join("+");
                                const url = "https://www.google.com/maps/place/" + streetAddressInfo + ",+" + location.City + ",+ " + location.State;
                                window.open(url);
                            }} />
                    </div>
                    <div className="col-md-4 colxs-12">
                        <ContactsWrapper
                            Heading="Escorts"
                            contacts={escorts}
                            ClickHandler={this.contactHandlerFunc} />
                    </div>
                    <div className="col-md-4 colxs-12">
                        <ContactsWrapper
                            Heading="Translators"
                            contacts={translators}
                            ClickHandler={this.contactHandlerFunc} />
                    </div>
                </div>
                <Modal onClose={this.responseFormCloseFunc} open={undefined !== showResponseForm ? showResponseForm : false} >
                    <div className="row">
                        <div className="col-sm-12">
                            <ResponseForm
                                SubmitPageFunc={(values: IResponseFormValues) => {
                                    saveResponseFormValuesService(values);
                                    this.setState({ showResponseForm: false });
                                }
                                } />
                        </div>
                        <div className="col-sm-offset-3 col-sm-3">
                            <button className={"btn btn-default"} onClick={this.closeResponseFormFunc}>Close</button>
                        </div>
                    </div>
                </Modal>
                <Modal onClose={this.visitorInfoCloseFunc} open={undefined !== showVisitorInfo ? showVisitorInfo : false}>
                    <div className="row">
                        <div className="col-sm-12">
                            <h3>Visitor Information</h3>
                        </div>
                        <div className="col-sm-6">
                            <h4>Telephone Numbers</h4>
                            <TelephoneNumbers TelephoneNumbers={telephoneNumbers || []} />
                        </div>
                        <div className="col-sm-6">
                            <h4>Email Addresses</h4>
                            <EmailAddresses EmailAddresses={emailAddresses || []} />
                        </div>
                        <div className="col-sm-offset-3 col-sm-3">
                            <button className={"btn btn-default"} onClick={this.closeVisitorInfoFunc}>Close</button>
                        </div>
                    </div>
                </Modal>
            </div> :
            <Loading />
    }


}