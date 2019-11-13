import React from "react";
import { IStringIndexable } from "../types";
import { IMasterTableCellsProps } from "./IMasterTableCellsProps";

export default function MasterTableCells<T extends IStringIndexable>(props: IMasterTableCellsProps<T>): JSX.Element[] {
    const { Fields, Key, Value } = props;
    const elements: JSX.Element[] = new Array<JSX.Element>();
    Fields.forEach((value: string, key: string) => {
        elements.push(
            <React.Fragment key={Key + key}>
                <td>{(Value[key] || value || "").toString()}</td></React.Fragment>
        );
    });
    return elements;
}
