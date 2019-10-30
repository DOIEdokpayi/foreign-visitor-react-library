export enum FormWrapperStatusEnum{
    initial, // after reset or empty form
    touched, // user has touched field
    dirty, // field has changed
    error, // field has error
    validated // field has been validated
}