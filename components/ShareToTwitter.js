
export const ShareToTwitter = ({}) => {
    function tweetCurrentPage() {
        window.open(
          "https://twitter.com/share?url=" +
            encodeURIComponent(window.location.href) +
            "&text=I Discovered This Minted Cryptoart At " +
            document.title + " #zora #cryptoart",
          "",
          "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600"
        );
        return false;
      }
        return     <label
        style={{ textDecoration: "underline", cursor: "pointer" }}
        onClick={() => tweetCurrentPage()}
      >
        Share This Piece On Twitter
      </label>;
}

export default ShareToTwitter