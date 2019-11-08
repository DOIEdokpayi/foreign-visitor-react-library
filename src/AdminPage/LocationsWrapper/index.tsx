/**
 * @function LocationsWrapper
 */

import * as React from "react";
import Locations from "../../Locations";
import { ILocationsWrapperProps } from "./ILocationsWrapperProps";

export function LocationsWrapper(props: ILocationsWrapperProps): React.ReactElement<ILocationsWrapperProps> {
    const { locations, ClickHandler } = props;
    return locations ?
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <h3>Locations</h3>
                    <Locations
                        ClickHandler={ClickHandler}
                        Locations={locations}
                    />
                </div>
            </div>
        </div>
        : <div style={{ display: "none" }} />;
}