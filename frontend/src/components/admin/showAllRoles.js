import React from "react";
import { useState, useEffect, useMemo } from "react";
import { getAllRoles } from "../../services/adminService";
import { useTable } from "react-table";
import { Button } from "react-bootstrap";

export default function ShowAllRolesForAdmin() {
  const [allRoles, setAllRoles] = useState([]);

  useEffect(() => {
    getAllRoles()
      .then((response) => {
        console.log(response);
        setAllRoles(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

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
        Header: "Actions",
        accessor: "actions",
        Cell: (props) => {
          console.log(props.row.values.roles);
          const rowRoles = props.row.values.roles;
          return (
            <div>
              {rowRoles.includes("ROLE_SUPERVISOR") ? (
                <Button>Remove Role Supervisor</Button>
              ) : (
                <Button>Add Role Supervisor</Button>
              )}
            </div>
          );
        },
      },
    ],
    []
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
