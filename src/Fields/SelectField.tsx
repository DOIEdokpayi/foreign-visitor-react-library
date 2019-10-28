import { IInputControlProps, IOption, ISelectField } from "doiforms";
import * as React from "react";
import DefaultChangeFunc from "../DefaultChangeFunc";

function SelectField(props: IInputControlProps): JSX.Element {
  const selectChanged: (event: React.ChangeEvent<HTMLSelectElement>) => void = DefaultChangeFunc<HTMLSelectElement>({
    SendMessage: props.SendMessage,
    Field: props.Field
  });
  const selectField: ISelectField = props.Field as ISelectField;
  return (
    <React.Fragment>
      <select
        aria-describedby={props.AriaDescribedBy}
        required={selectField.Required}
        id={selectField.Id}
        name={selectField.Name}
        className="form-control"
        value={(props.Value|| "").toString()}
        onChange={selectChanged}
        multiple={selectField.Multiple}
      >
        {(selectField.Options||[]).map((option: IOption, index:number) => (
          <option value={option.Value as string} key={selectField.Id+"Option"+index.toString()}>{option.Text}</option>
        ))}
      </select>
      {props.FeedbackElement}
    </React.Fragment>);}

export { SelectField };

