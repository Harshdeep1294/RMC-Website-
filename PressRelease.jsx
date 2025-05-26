import React from "react";
import './stylesheet/press.css';
import Navbar from "./NavBar";
import { Link, useNavigate } from 'react-router-dom';

const Press = () => {
    return (
      <div className="pressdiv">
        <Navbar />
        <h1>Press Notes</h1>
        <table className="presstable">
          <tr className="presstr">
            <th className="pressth1">Sr.</th>
            <th className="pressth">Date</th>
          </tr>
          <tr className="presstr">
            <td className="presstd1">1.</td>
            <td className="presstd">
            <Link to="/news1"  className="pressa">Press Note Of 30-sep-2024</Link>
              {/* <a href=""></a> */}
            </td>
          </tr>
          <tr className="presstr">
            <td className="presstd1">2.</td>
            <td className="presstd">
            <Link to="/news2"  className="pressa">Press Note Of 01-oct-2024</Link>
              {/* <a href="" className="pressa">Press Note Of 01-oct-2024</a> */}
            </td>
          </tr>
        </table>
      </div>
    );
};

export default Press;