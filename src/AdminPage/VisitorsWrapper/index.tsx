/**
 * @function VisitorsWrapper
 */

import * as React from "react";
import { IVisitorsWrapperProps } from "./IVisitorsWrapperProps";
import Visitors from "../../Visitors";

export function VisitorsWrapper(props: IVisitorsWrapperProps): React.ReactElement<IVisitorsWrapperProps> {
    const { visitors, ClickHandler } = props;
    return visitors ?
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <h3>Visitors</h3>
                    <Visitors
                        ClickHandler={ClickHandler}
                        Visitors={visitors} />
                </div>
            </div>
        </div>
        : <div style={{ display: "none" }} />;
}