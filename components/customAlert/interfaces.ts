export interface ICustomAlert {
    message?: string
    level?: AlertLevel
    newAlert: (message: string, level?: AlertLevel) => void
    closeAlert: () => void
}

export interface CustomAlertProps {
    customAlert: ICustomAlert
}

export type AlertLevel = "info" | "warning" | "error";