import Image from "next/image";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useRef, useState } from "react";

import axios from "axios";
const random = Math.floor(Math.random() * 390);
const query = gql`
  query {
    media(id: ${random}) {
      contentURI
      owner {
        id
      }
      creator {
        id
      }
    }
  }
`;

export default function Home() {
  const { loading, data } = useQuery(query);

  const [fileType, setFileType] = useState(null);

  useEffect(() => {
    !loading &&
      data &&
      axios
        .get("/api/checkFile", { params: { url: data.media.contentURI } })
        .then((res) =>
          res.data.length < 1
            ? setFileType("text")
            : setFileType(res.data.mime.substr(0, res.data.mime.indexOf("/")))
        );
  }, [data]);
  
  useEffect(() => {
    window.onkeypress = useKeypress;
  })
const useKeypress = (e) => {
  
 if(e.key === 'R'){
    window.location.reload();
 }
}
  const [trying, setTrying] = useState(null);
  if (loading) return <p>Loading Piece</p>;


  return (
    <div>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <Image onClick={() => window.location.reload()} src="/logo.png" width="50px" height="50px" layout="fixed" />
        <h1>Randomizer</h1>
      </div>
      <h3>dev by <span style={{textDecoration: 'underline'}}><a href="https://rasha.world">rasha</a></span> using <span style={{textDecoration: 'underline'}}><a href="https://zora.engineering/subgraph">zora subgraph</a></span></h3>
      <br />
      <label>Created By: {data.media.creator.id}</label>
      <br />
      <label>Owned by: {data.media.owner.id}</label> <br />
 
{!trying && "Loading"}
<br />
      {fileType === "text" && (
        <iframe
        onClick={() => window.location.assign(data.media.contentURI)}
          onLoad={() => setTrying(true)}
          className="frame"
          frameBorder="0"
          style={{ visibility: !trying && "hidden" }}
          src={data.media.contentURI}
        />
      )}
      {fileType === "image" && (
        <img
        onClick={() => window.location.assign(data.media.contentURI)}
          onLoad={() => setTrying(true)}
          src={data.media.contentURI}
          style={{ visibility: !trying && "hidden" }}
          width="500px"
          height="500px"
          layout="intrinsic"
        />
      )}
      {fileType === "video" && (
        <video
        
          controls
          autoplay={true}
         onCanPlay={() => setTrying(true)}
          src={data.media.contentURI}
          type="media"
          width="500px"
          height="500px"
        />
      )}
      {fileType === "audio" && (
        <video
          onLoad={() => setTrying(true)}
          onCanPlay={() => setTrying(true)}
         controls
         autoplay
          src={data.media.contentURI}
          style={{boxShadow: 'none'}}
        />
      )}

    </div>
  );
}
