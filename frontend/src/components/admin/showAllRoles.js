import React from "react";
import { useState, useEffect, useMemo, useRef } from "react";
// import { useDispatch } from "react-redux";
import { useTable } from "react-table";
import { Button } from "react-bootstrap";
import {
  getAllRoles,
  addSupervisor,
  removeSupervisor,
} from "../../services/adminService";

export default function ShowAllRolesForAdmin() {
  //   const dispatch = useDispatch();
  const [allRoles, setAllRoles] = useState([]);
  const [clicked, setClicked] = useState(true);
  // const [loading, setLoading] = useState(false);

  const dataRef = useRef();
  dataRef.current = allRoles;

  useEffect(() => {
    console.log("Run useEffect");
    getAllRoles()
      .then((response) => {
        setAllRoles(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [clicked]);

  const addSupervisorOnClick = (rowId) => {
    // console.log(rowId);
    // console.log(dataRef.current[rowId].email);
    // setLoading(true);
    addSupervisor(dataRef.current[rowId].email).then(() => {
      setClicked(!clicked);
      console.log(rowId);
    });
  };

  const removeSupervisorOnClick = (rowId) => {
    // console.log(rowId);
    // console.log(dataRef.current[rowId].email);
    // setLoading(true);
    removeSupervisor(dataRef.current[rowId].email).then(() => {
      setClicked(!clicked);
      console.log(rowId);
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
        Header: "Actions",
        accessor: "actions",
        Cell: (props) => {
          //   console.log(props.row.id);
          const rowId = props.row.id;
          const rowRoles = dataRef.current[rowId].roles;
          //   console.log(props.row.values.roles);
          //   const rowRoles = props.row.values.roles;
          return (
            <div>
              {rowRoles.includes("ROLE_SUPERVISOR") ? (
                <Button
                  onClick={() => removeSupervisorOnClick(rowId)}
                  // disabled={loading}
                >
                  {/* {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )} */}
                  <span>Remove Role Supervisor</span>
                </Button>
              ) : (
                <Button
                  onClick={() => addSupervisorOnClick(rowId)}
                  // disabled={loading}
                >
                  {/* {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )} */}
                  <span>Add Role Supervisor</span>
                </Button>
              )}
            </div>
          );
        },
      },
    ],
    [clicked]
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
