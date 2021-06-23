import React from "react";

export default function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    // console.log('preFilteredRows',preFilteredRows)
    const options = new Set();
    preFilteredRows.forEach((row) => {
      let option = row.values[id].includes("ROLE_SUPERVISOR")
        ? "Supervisor"
        : "User";
      options.add(option);
    });
    // console.log("options", options);
    // console.log("options.values()", options.values());
    return [...options.values()];
  }, [id, preFilteredRows]);

  // Render a multi-select box

  return (
    <select
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
