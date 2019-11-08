/**
 * @class AdminPageImpl
 */

import * as React from "react";
import Modal from 'react-responsive-modal';
import Loading from "../loading";
import ResponseForm from "../ResponseForm";
import { IResponseFormValues } from "../ResponseForm/IResponseFormValues";
import Sponsors from "../sponsors";
import { ISponsor, IVisit, IVisitor } from "../types";
import { IAdminPageImplProps } from "./IAdminPageImplProps";
import { IAdminPageImplState } from "./IAdminPageImplState";
import { VisitorsWrapper } from "./VisitorsWrapper";
import { VisitsWrapper } from "./VisitsWrapper";

export class AdminPageImpl extends React.Component<IAdminPageImplProps, IAdminPageImplState>  {

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
    }
    public componentDidMount(): void {
        const { handleError, sponsorsService } = this.props;
        sponsorsService()
            .then((sponsors: ISponsor[]) => this.setState({ sponsors: sponsors }))
            .catch(handleError);
    }
    public render(): React.ReactElement<IAdminPageImplProps> {
        const { handleError, IsAdmin, getResponseFormValuesService, saveResponseFormValuesService, visitorsService } = this.props;
        const { showResponseForm, sponsors, visitors, visits } = this.state;
        return sponsors ?
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 colxs-12">
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
                            SelectHandler={(visit: IVisit) =>
                                visitorsService(visit.Id)
                                    .then((visitors: IVisitor[]) => this.setState({ visitors: visitors }))
                                    .catch(handleError)
                            }
                            visits={visits} />
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <VisitorsWrapper
                            ClickHandler={(visitor: IVisitor) => console.log(visitor)}
                            visitors={visitors} />
                    </div>
                </div>
                <Modal onClose={this.responseFormCloseFunc} open={showResponseForm as boolean} >
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
                            <button onClick={this.closeResponseFormFunc}>Close</button>
                        </div>
                    </div>
                </Modal>
            </div> :
            <Loading />
    }


}