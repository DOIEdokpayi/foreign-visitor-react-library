/**
 * @class AdminPageImpl
 */

import * as React from "react";
import { IAdminPageProps } from "./IAdminPageProps";
import { IAdminPageImplState } from "./IAdminPageImplState";
import { ISponsor, IVisit } from "../types";
import Sponsors from "../sponsors";
import Loading from "../loading";

export interface IAdminPageImplProps extends IAdminPageProps {
    handleError: (reason: any) => void;
}
export class AdminPageImpl extends React.Component<IAdminPageImplProps, IAdminPageImplState>  {
    constructor(props: IAdminPageImplProps) {
        super(props);
        this.state = {};

    }
    public componentDidMount(): void {
        const { handleError, sponsorsService } = this.props;
        sponsorsService()
            .then((sponsors: ISponsor[]) => this.setState({ sponsors: sponsors }))
            .catch(handleError);
    }
    public render(): React.ReactElement<IAdminPageImplProps> {
        const { handleError } = this.props;
        return this.state.sponsors ?
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 colxs-12">
                        <Sponsors
                            Sponsors={this.state.sponsors}
                            ClickHandler={(sponsor: ISponsor) => {
                                const { visitsService } = this.props;
                                visitsService(sponsor.Id)
                                    .then((visits: IVisit[]) => this.setState({ visits: visits }))
                                    .catch(handleError);
                            }} />
                    </div>
                </div>
            </div> :
            <Loading />
    }
}