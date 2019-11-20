import { IResponseFormSubmitProps } from "./IResponseFormSubmitProps";

export function ResponseFormSubmit(props: IResponseFormSubmitProps): void {
    const { values } = props.ctx;
    var reader = new FileReader();
    values.attachment = [];
    reader.onload = () => {
        if (values.attachment) {
            values.attachment.push(reader.result as ArrayBuffer);
        }
    }
    if (props.fileInput && props.fileInput.files) { // not null

        for (let i = 0; i < props.fileInput.files.length; i++) {
            const file = props.fileInput.files[i];
            if (file) {
                reader.readAsArrayBuffer(file);
            }

        }
    }

    props.submitPageFunc(values);
}