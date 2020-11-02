import React, { useState } from "react";
import "./Table.css";
import mydata from "./mydata.json";

const Table = () => {
  const [state, setState] = useState({
    user: mydata,
    search: "",
  });

  const handleClick = () => {
    const sortedData = state.user.sort(function (a, b) {
      var nameA = a.firstName.toUpperCase();
      var nameB = b.firstName.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    setState({
      user: sortedData,
    });
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setState({
      ...state,
      search: value,
    });
  };

  const filteredSearch = state.user.filter((user) => {
    return user.firstName.indexOf(state.search) !== -1;
  });

  const displayedUsers = function() {
    if (state.search) {
      return filteredSearch;
    } else {
      return state.user;
    }
  }

  return (
    <>
      <div className="text-center">
        <input
          type="text"
          name="employee"
          value={state.search}
          placeholder="Search"
          onChange={handleInputChange}
        />
      </div>
      <br />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">
              <span id="nameColumn" onClick={handleClick}>
                Name
              </span>
            </th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {displayedUsers().map((user) => {
            return (
              <tr>
                <td>
                  <p>{user.id}</p>
                </td>
                <td>
                  <p>{user.firstName + " " + user.lastName}</p>
                </td>
                <td>
                  <p>{user.email}</p>
                </td>
                <td>
                  <p>{user.phone}</p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default Table;