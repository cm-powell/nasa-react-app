export default function Footer(props) {
    const { showModal, handleToggleModal, data } = props

    return (
        <footer>
            <div className="bgGradient"></div>
            <div>
                <a className="webLink" href="https://callumpowell.netlify.app/">
                    <h1>APOD PROJECT - CALLUM POWELL</h1>
                </a>
                <h2>{data?.title}</h2>
            </div>
            <button onClick={handleToggleModal}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}