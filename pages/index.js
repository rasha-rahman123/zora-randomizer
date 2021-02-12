import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";
import { memo, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Header from "../components/Header";
import Text from "../components/viewers/Text";
import { ImageView } from "../components/viewers/Image";
import Video from "../components/viewers/Video";
import Audio from "../components/viewers/Audio";
import ShareToTwitter from "../components/ShareToTwitter";

const query = gql`
  query Media($num: String) {
    media(id: $num) {
      contentURI
      id
      owner {
        id
      }
      creator {
        id
      }
    }
  }
`;

const multipleQueries = async () => {
try {
    const j = useQuery(firstQuery);
  const n = await j.data
  const num = await n.medias[0].id
    return num
} catch (err) {
  console.log(err)
}
}

const random = (num) =>  Math.floor(Math.random() * (num))

const Home = (props) => {

 
 
  const num = useMemo(() => random(props.num) + '', [props.num])

  
  const [fileType, setFileType] = useState(null);
  const [trying, setTrying] = useState(null);
  const router = useRouter();


   const {loading, error, data} = useQuery(query, {variables: {num}})

  useEffect(() => {
      !loading && data && !trying &&
      axios
        .get("/api/checkFile", { params: { url: data.media.contentURI } })
        .then((res) => {
          res.data.length < 1
            ? setFileType("text")
            : setFileType(res.data.mime.substr(0, res.data.mime.indexOf("/")));
            setTrying(true)
          router.push("/", `/direct/${data.media.id}`, { shallow: true });
   
        });
  }, [data]);

  if (loading)
    return (
      <div>
        <Header /> <p>Loading Piece</p>
      </div>
    );
  if (error)
    return (
      <div>
        <Header />
        <p>Hmm, got an error, click Zora Logo and retry</p>
      </div>
    );
  return (
    <div>
      <Header />
      {trying && (
        <>
          {" "}
          <br />
          <label>
            Created By <code style={{}}>{data.media.creator.id}</code>
          </label>
          <br />
          <label>
            Owned by <code style={{}}>{data.media.owner.id}</code>
          </label>{" "}
          <br />
        </>
      )}
      {!trying && "Loading"}
      <br />
      {fileType === "text" && (
        <Text
          contentURI={data?.media.contentURI}
          trying={trying}
          setTrying={setTrying}
        />
      )}
      {fileType === "image" && (
        <ImageView
          contentURI={data?.media.contentURI}
          trying={trying}
          setTrying={setTrying}
          screenX={window.innerWidth}
        />
      )}
      {fileType === "video" && (
        <Video
          contentURI={data?.media.contentURI}
          trying={trying}
          setTrying={setTrying}
          screenX={window.innerWidth}
        />
      )}
      {fileType === "audio" && (
        <Audio contentURI={data?.media.contentURI} setTrying={setTrying} />
      )}
      <br />
      <ShareToTwitter />
    </div>
  );
};

export default Home;




export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'https://api.thegraph.com/subgraphs/name/ourzora/zora-v1',
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
    query {
      medias(first: 1, orderBy: createdAtTimestamp, orderDirection: desc) {
        id
      }
    }
    `
  });

  return {
    props: {
      num: data.medias[0].id
    }
  }
}
