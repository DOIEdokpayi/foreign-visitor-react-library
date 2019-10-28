import {
  EnumFieldStatus,
  EnumFormAction,
  IField,
  IInputControlProps
} from "doiforms";
import { AsYouTypeFormatter } from "google-libphonenumber";
import * as React from "react";
const formatter: AsYouTypeFormatter = new AsYouTypeFormatter("US");

function TelephoneField(props: IInputControlProps): JSX.Element {
  const field: IField = props.Field;
  const handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const target: HTMLInputElement = event.target;
    const rawTelephoneNumber: string = target.value;
    const count: number = rawTelephoneNumber.length - 1;
    if (count >= 0) {
      formatter.clear();
      for (let i: number = 0; i < count; i++) {
        formatter.inputDigit(rawTelephoneNumber[i]);
      }
    }
    const telephoneNumber: string = count >= 0 ?
      formatter.inputDigit(rawTelephoneNumber[count]) || "" : "";

    if (target) {
      props.SendMessage({
        Action: EnumFormAction.Update,
        Update: {
          FieldStates: [
            {
              Field: props.Field,
              Status: EnumFieldStatus.Modified,
              Value: telephoneNumber
            }
          ]
        }
      });
    }
  };
  return (
    <React.Fragment>
      <input
        aria-describedby={props.AriaDescribedBy}
        type={"tel"}
        placeholder={field.Placeholder}
        required={field.Required}
        id={field.Id}
        name={field.Name}
        className="form-control"
        value={props.Value ? props.Value.toString() : ""}
        onChange={handleChange}
      />
      {props.FeedbackElement}
    </React.Fragment>
  );
}

export { TelephoneField };
