// Function to sort a table column
function sortTable(tableId, columnIndex, isNumeric, isAscending) {
    const table = document.getElementById(tableId);
    const rows = Array.from(table.rows).slice(1); // Skip header row

    rows.sort((rowA, rowB) => {
        const cellA = rowA.cells[columnIndex].innerText;
        const cellB = rowB.cells[columnIndex].innerText;

        if (isNumeric) {
            return isAscending ? cellA - cellB : cellB - cellA;
        }
        return isAscending
            ? cellA.localeCompare(cellB)
            : cellB.localeCompare(cellA);
    });

    // Reattach rows to the table
    rows.forEach((row) => table.tBodies[0].appendChild(row));
}
