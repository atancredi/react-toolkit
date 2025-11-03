import { useEffect, useState } from "react";
import { ICustomAlert, AlertLevel } from "./interfaces";

export const useCustomAlert = (): ICustomAlert => {
    const [message, setMessage] = useState<string | undefined>();
    const [level, setLevel] = useState<AlertLevel | undefined>();

    const closeAlert = () => {
        setMessage("")
        setLevel(undefined)
    }

    const newAlert = (message: string, level: AlertLevel = "error", triggerException: boolean = false) => {
        let msg = message != "" ? message : undefined;
        setMessage(msg);
        setLevel(level);
        if (level == "error" && triggerException)
            throw Error(message);
    }

    useEffect(() => {
        if (message != "" && level != undefined)
            setTimeout(() => {
                closeAlert()
            }, 3000);
    }, [message])

    return { message, level, newAlert, closeAlert }
}