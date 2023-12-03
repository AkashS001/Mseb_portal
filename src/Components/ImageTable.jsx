import React, { useState } from "react";
import MaterialTable from "material-table";
import { ThemeProvider, createTheme } from "@mui/material";

export const ImageTable = () => {
  const defaultMaterialTheme = createTheme();

  const [tableData, setTableData] = useState([
    { name: "akash", image: null },
  ]);

  const columns = [
    { title: "Officer Name", field: "name" },
    {
      title: "Image",
      render: (rowData) => (
        <img
          src={rowData.image ? URL.createObjectURL(rowData.image) : ""}
          alt="Signature"
          style={{ width: "100px" }}
        />
      ),
      editComponent: (props) => (
        <input
          type="file"
          accept="image/*"
          onChange={(e) => props.onChange(e.target.files[0])}
        />
      ),
    },
  ];

  return (
    <div className="Table1">
      <ThemeProvider theme={defaultMaterialTheme}>
        <MaterialTable
          columns={columns}
          data={tableData}
          title={"Details of Connected Load"}
          editable={{
            onRowAdd: (newRow) =>
              new Promise((resolve, reject) => {
                setTableData([...tableData, newRow]);
                resolve();
              }),
            onRowUpdate: (newRow, oldRow) =>
              new Promise((resolve, reject) => {
                const updatedData = [...tableData];
                updatedData[oldRow.tableData.id] = newRow;
                setTableData(updatedData);
                resolve();
              }),
            onRowDelete: (selectedRow) =>
              new Promise((resolve, reject) => {
                const updatedData = [...tableData];
                updatedData.splice(selectedRow.tableData.id, 1);
                setTableData(updatedData);
                resolve();
              }),
          }}
          options={{ paging: false, actionsColumnIndex: -1 }}
        />
      </ThemeProvider>
    </div>
  );
};
