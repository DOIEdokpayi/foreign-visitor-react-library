import * as React from "react";
import { Link } from "react-router-dom";
import { IMasterDetailURLProps } from "./IMasterDetailURLProps";
import { ICommonFields } from "../types";



export default function MasterDetailURL<T extends ICommonFields>(props: IMasterDetailURLProps<T>): React.ReactElement<IMasterDetailURLProps<T>> {
    const {
        BackUrl,
        Data,
        DeleteAction,
        DeleteConfirm,
        DeleteText,
        DetailText,
        DetailUrl,
        Fields,
        NewText,
        NewUrl,
        NextUrl } = props;
    const renderBody = () => {
        return <tbody>{renderRows()}</tbody>;
    }
    const renderRows = () => {
        const rows: JSX.Element[] = [];
        for (const rowData of Data.entries()) {
            rows.push(RowCallback(rowData[1], rowData[0]));
        }
        return rows;
    }
    const renderHeader = () => {
        return (
            <thead>
                <tr><th />{renderHeaderRows()}</tr>
            </thead>
        );
    }

    const renderHeaderRows = () => {
        const headerRows: JSX.Element[] = [];
        let index: number = 0;
        for (const headerText of Fields.values()) {
            headerRows.push(<th key={"header" + index++}>{headerText}</th>);
        }
        return headerRows;
    }
    const RowCallback = (rowData: T, id: string) => {
        const key: string = "row" + id;
        return <tr key={key}>
            <td>
                <Link to={DetailUrl(id)} className="btn btn-default" aria-label={DetailText}>
                    <i className="fa fa-pencil" aria-hidden="true" /> {DetailText}
                </Link>
                <button
                    className="btn btn-default"
                    aria-label={DeleteText}
                    onClick={() => OnDelete(id)}>
                    <i className="fa fa-trash" aria-hidden="true" /> {DeleteText}
                </button>
            </td>
            {renderRow(rowData, key)}
        </tr>;
    }

    const renderRow = (rowData: T, key: string) => {
        const cells: JSX.Element[] = [];
        let cellindex: number = 0;
        for (const property of Fields.keys()) {
            cells.push(
                <td key={key + "cell" + cellindex++}>{(rowData[property] || "").toString()}</td>
            );
        }
        return cells;
    }

    const OnDelete = (id: string) => {
        if (confirm(DeleteConfirm)) {
            DeleteAction(id);
        }
    }

    return (
        <div className="container">
            <div className="col-xs-12">
                <div className="table-responsive">
                    <table className="table table-hover">
                        {renderHeader()}
                        {renderBody()}
                    </table>
                </div>
            </div>
            <div className="col-xs-10 col-xs-offset-2">
                <div className="col-xs-4">
                    <Link className="btn btn-primary" to={NewUrl()} aria-label={NewText}>
                        <i className="fa fa-plus" aria-hidden="true" /> {NewText}
                    </Link>
                </div>
                <div className="col-xs-4">
                    <Link className="btn btn-default" to={BackUrl} aria-label={NewText}>
                        <i className="fa fa-backward" aria-hidden="true"></i> Back
            </Link>
                </div>
                <div className="col-xs-4">
                    <Link className="btn btn-default" to={NextUrl} aria-label={NewText}>
                        <i className="fa fa-forward" aria-hidden="true"></i> Next
            </Link>
                </div>
            </div>
        </div>
    );
}

