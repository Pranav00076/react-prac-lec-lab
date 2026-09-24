import Navbar from "./Navbar/Navbar";
import "./Contacts.css";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <Navbar />
      <h1>Contacts</h1>

      <table>
        <tr>
          <th>Contact</th>
          <Link to="/contact/:contactid">
            <th>About Contact</th>
          </Link>

          <th>Country</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
      </table>
    </>
  );
}
