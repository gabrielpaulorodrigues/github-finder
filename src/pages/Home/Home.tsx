import { useState } from "react";
import { UserSearch } from "./components/UserSearch";

export function Home() {
    const [alert, setAlertState] = useState<{ msg: string; type: string } | null>(null);

    function setAlert(msg: string, type: string) {
        setAlertState({ msg, type });
        setTimeout(() => setAlertState(null), 3000);
    }

    return (
        <div>
            <UserSearch setAlert={setAlert} />
            {alert && <div className={`alert alert-${alert.type}`}>{alert.msg}</div>}
        </div>
    );
}