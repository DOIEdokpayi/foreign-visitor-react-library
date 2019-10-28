import * as React from "react";
import { IInputControlProps, EnumFieldStatus, EnumFormAction } from "doiforms";
import DatePicker from "react-date-picker/dist/entry.nostyle";

function DateField(props: IInputControlProps): JSX.Element {
  const dateChange: (date: Date | Date[]) => void = (date: Date | Date[]) => {
    props.SendMessage({
      Action: EnumFormAction.Update,
      Update: {
        FieldStates: [
          {
            Field: props.Field,
            Status: EnumFieldStatus.Modified,
            Value: date as Date
          }
        ]
      }
    });
  };
  return (
    <React.Fragment>
      {props.Value ? (
        <DatePicker
          className="form-control"
          onChange={dateChange}
          required={props.Field.Required}
          value={props.Value as Date}
        />
      ) : (
        <DatePicker
          className="form-control"
          onChange={dateChange}
          required={props.Field.Required}
        />
      )}
      {props.FeedbackElement}
    </React.Fragment>
  );
}

export { DateField };
