import * as React from "react";


import { IStringIndexable } from "../types";
import { IMasterTableRowProps } from "./IMasterTableRowProps";
import MasterTableCells from "../MasterTableCells";

export default function MasterTableRow<T extends IStringIndexable>(props: IMasterTableRowProps<T>): React.ReactElement<IMasterTableRowProps<T>> {
    const { DeleteText, DetailText, Fields, Key, Value } = props;
    const DetailClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        props.OnDetailClick(props.Key);
        event.preventDefault();
    }

    const DeleteClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        props.DeleteClick(props.Key);
        event.preventDefault();
    }
    return <tr key={Key}>
        <td>
            <button
                type={"button"}
                className="btn btn-default"
                onClick={DetailClick}>
                <i className="fa fa-pencil" aria-hidden="true" /> {DetailText}
            </button>
            <button
                type={"button"}
                className="btn btn-default"
                aria-label={DeleteText}
                onClick={DeleteClick}>
                <i className="fa fa-trash" aria-hidden="true" /> {DeleteText}
            </button>
        </td>
        {MasterTableCells({
            Value: Value, Key: Key, Fields: Fields
        })}
    </tr>;
}


