/**
 * @class VisitsWrapper
 */

import * as React from "react";
import { IVisitsWrapperProps } from "./IVisitsWrapperProps";
import Visits from "../../Visits";

export class VisitsWrapper extends React.Component<IVisitsWrapperProps> {
    constructor(props: IVisitsWrapperProps) {
        super(props);
        this.state = {};
    }
    public render(): React.ReactElement<IVisitsWrapperProps> {
        const { ClickHandler, IsAdmin, SelectHandler, visits } = this.props;
        return visits ?
            <Visits
                ClickHandler={ClickHandler}
                IsAdmin={IsAdmin}
                SelectHandler={SelectHandler}
                Visits={visits} /> : <div style={{ display: "none" }} />;
    }
}