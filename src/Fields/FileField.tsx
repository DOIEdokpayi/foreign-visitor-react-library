import { EnumFieldStatus, EnumFormAction, IFileField, IInputControlProps } from "doiforms";
import * as React from "react";

function FileField(props: IInputControlProps): JSX.Element {
    
    const fileChanged: (event: React.ChangeEvent<HTMLInputElement>) => void = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target: HTMLInputElement = event.target;
        if (target) {
            const fileList: FileList | null = target.files;
            const files:File[] = [];
            if(null !== fileList){
                for(let i:number = 0; i< fileList.length; i++){
                    files.push(fileList[i]);
                }
            }
            const fileData: File|File[]| undefined = files.length > 1? files: (files.length == 1? files[0]: undefined);
          props.SendMessage({
            Action: EnumFormAction.Update,
            Update: {
              FieldStates: [{
                Field: props.Field,
                Status: EnumFieldStatus.Modified,
                Value:  fileData}] } });
        }
      }
    const fileField: IFileField =  props.Field as IFileField;
    return (
      <React.Fragment>        
          <input
            aria-describedby={props.AriaDescribedBy}
            placeholder={fileField.Placeholder}
            type={"file"}
            multiple={fileField.Multiple}
            className="form-control"
            onChange={fileChanged}
            required={props.Field.Required}
            value={props.Value}
            id={fileField.Id}
            name={fileField.Name}    
          />
        {props.FeedbackElement}
      </React.Fragment>
    );
}

export default FileField;