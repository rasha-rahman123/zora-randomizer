
export const Video = ({contentURI,setTrying, screenX}) => {
        return <video
        controls
        autoplay={true}
        onCanPlay={() => setTrying(true)}
        src={contentURI}
        type="media"
        width={screenX < 700 ? "250px" : "500px"}
        height={screenX < 700 ? "250px" : "500px"}
      />;
}

export default Video