
export const Text = ({contentURI, setTrying, trying }) => {
        return <iframe
        onClick={() => window.location.assign(contentURI)}
          onLoad={() => setTrying(true)}
          className="frame"
          frameBorder="0"
          style={{ visibility: !trying && "hidden" }}
          src={contentURI}
        />;
}

export default Text