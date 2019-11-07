import { IccHandlerProps } from "./IccHandlerProps";

export function ccHandler(props:IccHandlerProps): void{
    const {setFieldValue, values} = props;
    const cc = values.cc || [];
    cc.push("");
    setFieldValue("cc", cc);
}