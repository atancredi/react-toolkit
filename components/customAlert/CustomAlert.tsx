"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CustomAlertProps } from "./interfaces"

import './CustomAlert.css';

export default function CustomAlert({ customAlert }: CustomAlertProps) {

    return customAlert.message && customAlert.level && (
        <Alert className={'dashboard-alert '+customAlert.level} onClick={() => { customAlert.closeAlert() }}>
            <AlertTitle>An error has occurred</AlertTitle>
            <AlertDescription>
                {customAlert.message}
            </AlertDescription>
        </Alert>

    )
}