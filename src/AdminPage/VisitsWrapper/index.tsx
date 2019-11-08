/**
 * @functionVisitsWrapper
 */

import * as React from "react";
import { IVisitsWrapperProps } from "./IVisitsWrapperProps";
import Visits from "../../Visits";

export function VisitsWrapper(props: IVisitsWrapperProps): React.ReactElement<IVisitsWrapperProps> {
    const { ClickHandler, IsAdmin, SelectHandler, visits } = props;
    return visits ?
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <h3>Visits</h3>
                    <Visits
                        ClickHandler={ClickHandler}
                        IsAdmin={IsAdmin}
                        SelectHandler={SelectHandler}
                        Visits={visits} />
                </div>
            </div>
        </div>
        : <div style={{ display: "none" }} />;
}