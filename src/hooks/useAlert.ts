import { useState } from "react";

interface Alert {
    msg: string;
    type: string;
}

export function useAlert() {
    const [alert, setAlertState] = useState<Alert | null>(null);

    function setAlert(msg: string, type: string) {
        setAlertState({ msg, type });
        setTimeout(() => setAlertState(null), 3000);
    }

    return { alert, setAlert };
}