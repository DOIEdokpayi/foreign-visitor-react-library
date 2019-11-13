import * as React from "react";
import IProgressBarProps from "./IProgressBarProps";

export default function ProgressBar(props: IProgressBarProps): React.ReactElement<IProgressBarProps> {
    const percentage: number = props.Progress * 100;
    const percentageString: string = percentage.toString() + "%";
    return <div className="col-xs-12">
        <div className="progress">
            <div className="progress-bar"
                role="progressbar"
                aria-valuenow={percentage}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: percentageString }}>
                <span className="sr-only">{percentageString} Complete</span>
            </div>
        </div>
    </div>;
}

