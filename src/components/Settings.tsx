import './Settings.scss';

interface SettignsProps {
    onSave: () => void;
}

function Settings(props: SettignsProps) {
    function onClick() {
        props.onSave();
    }

    return (
        <article className="settings">
            <h1>
                Settings
            </h1>
            <a href="https://github.com/timefreer/wilt">
                WILT GitHub
            </a>

            <button className="settings__save-btn"
                onClick={onClick}>
                save
            </button>
        </article>
    );
}

export default Settings;
