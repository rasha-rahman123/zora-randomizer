import Image from "next/image";
export const Header = ({}) => {
  return (
    <div>
      {" "}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          onClick={() => window.location.assign("/")}
          src="/logo.png"
          width="50px"
          height="50px"
          layout="fixed"
        />
        <h1>Randomizer</h1>
      </div>
      <h4>Hit ZORA's logo to generate a random minted cryptoart</h4>
      <h3>
        dev by{" "}
        <span style={{ textDecoration: "underline" }}>
          <a href="https://rasha.world">rasha</a>
        </span>{" "}
        using{" "}
        <span style={{ textDecoration: "underline" }}>
          <a href="https://zora.engineering/subgraph">zora subgraph</a>
        </span>
      </h3>
    </div>
  );
};

export default Header;
