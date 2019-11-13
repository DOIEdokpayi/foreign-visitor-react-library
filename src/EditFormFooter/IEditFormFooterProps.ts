export interface IEditFormFooterProps {
    CancelClick: () => void;
    DeleteEnabled: boolean;
    DeleteClick: () => void;
    SaveClick?: () => void;
    ResetClick?: () => void;
}