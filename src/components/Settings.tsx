import "./Settings.scss";
import { Link } from "react-router-dom";

function Settings(props: any) {
    return (
        <article>
            <h1>
                Settings
            </h1>
            <details>
                <summary>About</summary>
                An open-source web app to help make everyday learning active.
                Source code can be found on <a href="https://github.com/timefreer/wilt">GitHub</a>.
                It is under a <a href="https://github.com/timefreer/wilt/blob/main/LICENSE">GPL-3.0 license</a>.
            </details>

            <Link to="/">
                <button className="settings__back-btn">
                    Back to Home
                </button>
            </Link>
        </article>
    );
}

export default Settings;
