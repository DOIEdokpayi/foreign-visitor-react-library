/**
 * @class VisitorsWrapper
 */

import * as React from "react";
import { IVisitorsWrapperProps } from "./IVisitorsWrapperProps";
import Visitors from "../../Visitors";

export class VisitorsWrapper extends React.Component<IVisitorsWrapperProps> {
    constructor(props: IVisitorsWrapperProps) {
        super(props);
        this.state = {};
    }
    public render(): React.ReactElement<IVisitorsWrapperProps> {
        const { visitors, ClickHandler } = this.props;
        return visitors ?
            <Visitors
                ClickHandler={ClickHandler}
                Visitors={visitors} /> : <div style={{ display: "none" }} />;
    }
}