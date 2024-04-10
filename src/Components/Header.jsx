import trollface from "../assets/TrollFace.png";

function Header() {
  return (
    <header className="header">
      <img src={trollface} className="troll-img" alt="Troll-face" />
      <h2 className="troll-title">Meme Generator</h2>
      <h4 className="troll-text">React-Project 1</h4>
    </header>
  );
}
export default Header;
