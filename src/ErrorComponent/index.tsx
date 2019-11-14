/**
 * @function ErrorComponent
 */

import * as React from 'react';
import IErrorComponentProps from './IErrorComponentProps';

export default function ErrorComponent(props: IErrorComponentProps): React.ReactElement<IErrorComponentProps> {
    const { errorMessage, error, errorInfo } = props;
    return <div className="container-fluid">
        <div className="row">
            <div className="col-sm-12">
                <p className={"bg-danger"}>{errorMessage}</p>
            </div>
            {
                error ?
                    <div className={"col-sm-12"}>

                        <p className="text-danger">
                            <h3>{error.name}</h3>
                            {error.message}
                        </p>
                        <p className="bg-info">
                            {error.stack}
                        </p>
                    </div> : undefined
            }
            {
                errorInfo ?
                    <div className={"col-sm-12"}>

                        <p className="text-danger">
                            <h3>Component Stack</h3>
                            {errorInfo.componentStack}
                        </p>
                    </div> : undefined
            }
        </div>
    </div>;
}