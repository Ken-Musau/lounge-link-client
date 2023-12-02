import "./dashboard.css";
import { useContext } from "react";
import { ClientContext } from "../../context/User";
import { useNavigate } from "react-router-dom";

function ClientDashBoard() {
  const { client, setClient } = useContext(ClientContext);

  const navigate = useNavigate();
  console.log(client);

  function handleLogout() {
    localStorage.removeItem("jwt");
    setClient(null);
    navigate("/login");
  }

  return (
    <div className="client-dashboard">
      Welcome {client?.username}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default ClientDashBoard;
