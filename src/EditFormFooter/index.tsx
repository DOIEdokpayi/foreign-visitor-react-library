import * as React from "react";
export interface IEditFormFooterProps {
    CancelClick: () => void;
    DeleteEnabled: boolean;
    DeleteClick: () => void;
    SaveClick?: () => void;
    ResetClick?: () => void;
}


export default function EditFormFooter(props: IEditFormFooterProps): JSX.Element {
    const {CancelClick, DeleteClick, DeleteEnabled, ResetClick, SaveClick } = props;
    return <div className="row">
        <div className="col-xs-10 col-xs-offset-2">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-3">
                        <button type={"submit"} className="btn btn-primary" onClick={SaveClick}>
                            <i className="fa fa-floppy-o" aria-hidden="true"></i>
                            {" "}Save
                            </button>
                    </div>
                    <div className="col-xs-3">
                        <button type={"reset"} className="btn btn-default" onClick={ResetClick}>
                            <i className="fa fa-times" aria-hidden="true"></i>
                            {" "}Reset
                            </button>
                    </div>
                    <div className="col-xs-3">
                        <button type={"button"} className="btn btn-warning" onClick={CancelClick}>
                            Cancel
                            </button>
                    </div>
                    <div className="col-xs-3">
                        <button
                            type={"button"}
                            className="btn btn-danger"
                            disabled={DeleteEnabled}
                            onClick={DeleteClick}>
                            <i className="fa fa-trash" aria-hidden="true"></i>
                            {" "}Delete
                            </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
