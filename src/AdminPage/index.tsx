/**
 * @class AdminPage
 */

import * as React from 'react'
import { IAdminPageProps } from './IAdminPageProps';
import { IAdminPageState } from './IAdminPageState';
import { ErrorComponent } from '../ErrorComponent';
import { AdminPageImpl } from './AdminPageImpl';

export class AdminPage extends React.Component<IAdminPageProps, IAdminPageState> {
    constructor(props: IAdminPageProps) {
        super(props);
        this.state = {};
    }
    public render(): React.ReactElement<IAdminPageProps> {
        return this.state.hasError ?
            <ErrorComponent
                errorMessage={this.state.errorMessage as string}
                error={this.state.error}
                errorInfo={this.state.errorInfo} /> :
            <AdminPageImpl
                handleError={(reason: any) => this.setState({ errorMessage: reason.toString() })}
                {...this.props}
            />;
    }
    public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo,
            errorMessage: "Unexpected Problem!",
            hasError: true
        });
    }
}