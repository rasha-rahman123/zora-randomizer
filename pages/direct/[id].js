import { gql, useQuery } from "@apollo/client";
import { useEffect, useRef, useState } from "react";
import {useRouter} from 'next/router'
import axios from "axios";
import Header from "../../components/Header";

function tweetCurrentPage()
{ window.open("https://twitter.com/share?url="+ encodeURIComponent(window.location.href)+"&text=Found This Piece On "+document.title, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false; }


export default function DirectID() {
    const router = useRouter()
    const {id} = router.query
    const query = gql`
  query {
    media(id: ${id}) {
      contentURI
      owner {
        id
      }
      creator {
        id
      }
      createdAtTimestamp
      currentBids {
          amount
          currency {
              decimals
              name
          }
      }
    }
  }
`;
  const { loading, data } = useQuery(query);
  const [fileType, setFileType] = useState(null);

  useEffect(() => {
    !loading &&
      data &&
      axios
        .get("/api/checkFile", { params: { url: data.media.contentURI } })
        .then((res) =>{
          res.data.length < 1
            ? setFileType("text")
            : setFileType(res.data.mime.substr(0, res.data.mime.indexOf("/")))
            
        });
  }, [data]);
  
  
  const [trying, setTrying] = useState(null);
  if (loading) return <p>Loading Piece</p>;


  return (
    <div>
     <Header />
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
  <br />
  <label style={{textDecoration: 'underline', cursor: 'pointer'}} onClick={() => tweetCurrentPage()}>Share This Piece On Twitter</label>
    </div>

  );
}
