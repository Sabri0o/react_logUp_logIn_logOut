import React from "react";
import { useState, useEffect, useMemo, useRef } from "react";
import { useTable } from "react-table";
import { Button } from "react-bootstrap";
import {
  getAllRoles,
  addSupervisor,
  removeSupervisor,
} from "../../services/adminService";

export default function ShowAllRolesForAdmin() {
  const [allRoles, setAllRoles] = useState([]);
  const [clicked, setClicked] = useState(true);
  const [loading, setLoading] = useState(false);

  const dataRef = useRef();

  dataRef.current = allRoles;

  useEffect(() => {
    console.log("Run useEffect");
    setLoading(false);
    getAllRoles()
      .then((response) => {
        setAllRoles(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [clicked]);

  const addSupervisorOnClick = (rowId) => {
    setLoading(true);
    addSupervisor(dataRef.current[rowId].email).then(() => {
      setClicked(!clicked);
      console.log(rowId);
    });
  };

  const removeSupervisorOnClick = (rowId) => {
    setLoading(true);
    removeSupervisor(dataRef.current[rowId].email).then(() => {
      setClicked(!clicked);
    });
  };

  const columns = useMemo(
    () => [
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Roles",
        accessor: "roles",
        Cell: (props) => {
          return props.value.includes("ROLE_SUPERVISOR")
            ? "Supervisor"
            : "User";
        },
      },
      {
        Header: "Change Role",
        accessor: "change role",
        Cell: (props) => {
          //   console.log(props.row.id);
          const rowId = props.row.id;
          const rowRoles = dataRef.current[rowId].roles;
          //   console.log(props.row.values.roles);
          return (
            <div>
              {rowRoles.includes("ROLE_SUPERVISOR") ? (
                <Button
                  onClick={() => removeSupervisorOnClick(rowId)}
                  disabled={loading}
                >
                  <span className=""></span>
                  <span>Remove Role Supervisor</span>
                </Button>
              ) : (
                <Button
                  onClick={() => addSupervisorOnClick(rowId)}
                  disabled={loading}
                >
                  <span>Add Role Supervisor</span>
                </Button>
              )}
            </div>
          );
        },
      },
    ],
    [clicked, loading]
  );

  const data = React.useMemo(() => allRoles, [allRoles]);

  const {
    getTableProps, // Sends the needed props to your table.
    getTableBodyProps, // Sends needed props to your table body
    headerGroups, // Returns normalized header groups
    rows, // rows for the table based on the data passed
    prepareRow, // Prepare the row in order to be displayed.
  } = useTable({
    columns: columns,
    data: data,
  });

  return (
    <div>
      <h2>All Roles</h2>

      {allRoles.length === 0 ? (
        <div className="container">Loading...</div>
      ) : (
        <div className="col-md-8 list">
          <table
            className="table table-striped table-bordered"
            {...getTableProps()}
          >
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, i) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
