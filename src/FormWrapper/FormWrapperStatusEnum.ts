export enum FormWrapperStatusEnum{
    initial, // after reset or empty form
    dirty, // field has changed
    error, // field has error
    validated // field has been validated
}