// Define a default UI for filtering
// function ColumnFilter({
//     column: { filterValue, preFilteredRows, setFilter },
//   }) {
//     const count = preFilteredRows.length

//     return (
//       <input
//         value={filterValue || ''}
//         onChange={e => {
//           setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
//         }}
//         placeholder={`Search ${count} records...`}
//       />
//     )
//   }

export default function ColumnFilter({ column }) {
  const { filterValue, setFilter, preFilteredRows } = column;
  const count = preFilteredRows.length;
  return (
    <>
      <input
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
        placeholder={`${count} results`}
      />
    </>
  );
}
