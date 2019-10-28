import * as React from "react";
import { IInputControlProps, EnumFieldStatus, EnumFormAction } from "doiforms";
import DateTimePicker from "react-datetime-picker/dist/entry.nostyle";

function DateTimeField(props: IInputControlProps): JSX.Element {
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
        <DateTimePicker
          className="form-control"
          onChange={dateChange}
          required={props.Field.Required}
          value={props.Value as Date}
        />
      ) : (
        <DateTimePicker
          className="form-control"
          onChange={dateChange}
          required={props.Field.Required}
        />
      )}
      {props.FeedbackElement}
    </React.Fragment>
  );
}

export { DateTimeField };
