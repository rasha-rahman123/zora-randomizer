import Image from 'next/image'

export const ImageView = ({contentURI, trying, setTrying, screenX}) => {
        return  <Image
        onClick={() => window.location.assign(contentURI)}
        onLoad={() => setTrying(true)}
        src={contentURI}
        style={{ visibility: !trying && "hidden" }}
        width={screenX < 700 ? "250px" : "500px"}
        height={screenX < 700 ? "250px" : "500px"}
        layout="intrinsic"
      />;
}

export default ImageView