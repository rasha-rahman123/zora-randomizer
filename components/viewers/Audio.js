
export const Audio = ({setTrying, contentURI}) => {
        return     <audio
        onLoad={() => setTrying(true)}
        onCanPlay={() => setTrying(true)}
        controls
        autoplay
        src={contentURI}
        style={{ boxShadow: "none" }}
      />;
}

export default Audio