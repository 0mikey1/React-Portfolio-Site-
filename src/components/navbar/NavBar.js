import "./navbar.css";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <ul id="MiniLeftNav">
      <li>
        <a className="navtext" href="#home">
          <i class="fa fa-home fa-2x"></i> <span>Home</span>
        </a>
      </li>
      <li>
        <a className="navtext" href="#aboutme">
          <i class="fa fa-user fa-2x"></i>
          <span>About Me</span>
        </a>
      </li>
      <li>
        <a className="navtext" href="#Project">
          <i class="fa fa-briefcase fa-2x"></i>
          <span>Projects</span>
        </a>
      </li>
      <li>
        <a className="navtext" href="#">
          <i class="fa fa-envelope fa-2x"></i>
          <span>Contact Me</span>
        </a>
      </li>
      <li>
        <a
          className="navtext"
          href="https://github.com/0mikey1"
          target="_blank"
        >
          <i class="fa fa-github-square fa-2x"></i>
          <span>GitHub</span>
        </a>
      </li>
      <li>
        <a
          className="navtext"
          href="https://www.linkedin.com/in/michaelbentov/"
          target="_blank"
        >
          <i class="fa fa-linkedin-square fa-2x"></i>
          <span>LinkedIn</span>
        </a>
      </li>
      <li>
        <a className="navtext" href="#" target="_blank">
          <i class="fa fa-twitter-square fa-2x"></i>
          <span>Twitter</span>
        </a>
      </li>
    </ul>
  );
}
