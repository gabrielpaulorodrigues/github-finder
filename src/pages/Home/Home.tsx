
import { useAlert } from "../../hooks/useAlert";
import { UserSearch } from "./components/UserSearch";

export function Home() {

    const { alert, setAlert } = useAlert();

    return (
        <div>
            <UserSearch setAlert={setAlert} />
            {alert && <div className={`alert alert-${alert.type}`}>{alert.msg}</div>}
        </div>
    );
}