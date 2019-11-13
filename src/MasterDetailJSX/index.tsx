import * as React from "react";
import { IStringIndexable, IPair } from "../types";
import IMasterDetailJSXProps from "./IMasterDetailJSXProps";
import MasterTableRow from "../MasterTableRow";

export interface IMasterDetailJSXState<T extends IStringIndexable> {
    Data: IPair<T>[];
}
export default class MasterDetailJSX<T extends IStringIndexable> extends React.Component<IMasterDetailJSXProps<T>, IMasterDetailJSXState<T>> {
    private onClickDeleteFunc: (key: string) => void;
    private handleClickFunc: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

    constructor(props: IMasterDetailJSXProps<T>) {
        super(props);
        this.onClickDeleteFunc = this.OnDelete.bind(this);
        this.handleClickFunc = this.HandleClick.bind(this);
        this.state = MasterDetailJSX.Initialize<T>(this.props.Data)
    }

    private static Initialize<T>(data: Map<string, T>): IMasterDetailJSXState<T> {
        const pairs: IPair<T>[] = [];
        data.forEach((rowValue: T, key: string) => pairs.push({ value: rowValue, Key: key }));
        return { Data: pairs };
    }

    public render(): JSX.Element {
        return (
            <div className="container">
                <div className="col-xs-12">
                    <div className="table-responsive">
                        <table className="table table-hover">
                            {this.renderHeader()}
                            {this.renderBody()}
                        </table>
                    </div>
                </div>
                <div className="col-xs-12">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-2">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={this.handleClickFunc}>
                                    <i className="fa fa-plus" aria-hidden="true" /> {this.props.NewText}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    public renderBody(): JSX.Element {
        return <tbody>{this.renderRows()}</tbody>;
    }
    public renderRows(): React.ReactNode {
        return this.state.Data.map((
            pair: IPair<T>,
            index: number) =>
            <MasterTableRow key={pair.Key + index.toString()}
                DeleteAction={this.props.DeleteAction}
                DeleteClick={this.onClickDeleteFunc}
                DeleteText={this.props.DeleteText}
                DetailText={this.props.DetailText}
                OnDetailClick={this.props.OnDetailClick}
                Key={pair.Key}
                Fields={this.props.Fields}
                Value={pair.value} />)
    }
    public renderHeader(): JSX.Element {
        return (
            <thead>
                <tr><th />{this.renderHeaderRows()}</tr>
            </thead>
        );
    }

    public renderHeaderRows(): JSX.Element[] {
        const headerRows: JSX.Element[] = [];
        let index: number = 0;
        for (const headerText of this.props.Fields.values()) {
            headerRows.push(<th key={"header" + index++}>{headerText}</th>);
        }
        return headerRows;
    }


    public OnDelete(key: string): void {
        if (confirm(this.props.DeleteConfirm)) {
            this.setState(MasterDetailJSX.Initialize(this.props.DeleteAction(key)));
        }
    }
    public HandleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        this.props.OnNewClick();
        event.preventDefault();
    }
}
