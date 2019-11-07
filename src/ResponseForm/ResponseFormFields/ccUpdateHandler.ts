import { IccUpdateHandlerProps } from "./IccUpdateHandlerProps";

export function ccUpdateHandler(props: IccUpdateHandlerProps): void {
    const { emailAddress, index, setFieldValue, values } = props;
    if (index > -1 && values.cc && values.cc.length > 0 && index < values.cc.length) {
        const cc = values.cc.slice();
        cc[index] = emailAddress;
        setFieldValue("cc", cc);
    }
}