import "../styles/index.scss";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import Favicon from "react-favicon";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://api.thegraph.com/subgraphs/name/ourzora/zora-v1",
  }),
  cache: new InMemoryCache(),
});
function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <header>
        <Favicon url="/favicon.png" />
        <title>Zora Randomizer</title>{" "}
      </header>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
