import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleNew = () => {
    navigate("/new");
  };

  return (
    <header>
      <h1>Journal</h1>
      <button onClick={handleNew} className="new-entry-btn">
        + New Entry
      </button>
    </header>
  );
}

export default Header;
