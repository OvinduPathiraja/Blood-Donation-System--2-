import React from "react";
import './Table.css';


function Table({ tableName, numRows }) {
  const tables = {
    "DONOR HISTORY": {
      columns: ["NIC", "DATE OF DONATION", "BLOOD TYPE", "QUANTITY OF BLOOD DONATED IN PINTS"],
    },
    "HOSPITAL HISTORY": {
      columns: ["DATE", "NAME OF BLOOD BANK", "BLOODTYPE", "AMOUNT OF BLOOD"],
    },
    "BLOOD BANK HISTORY": {
      columns: ["DATE", "NAME OF HOSPITAL", "BLOODTYPE", "AMOUNT OF BLOOD"],
    },
    "DONOR SEARCH": {
      columns: ["DONOR NUMBER", "NAME OF DONOR", "TELEPHONE DETAILS", "ENTER BLOOD TYPE", "ENTER LOCATION OF BLOOD BANK", "ENTER AMOUNT OF BLOOD DONATED", "REWARD POINTS", "ENTER COMMENTS ABOUT THE DONOR"],
    },
    "BLOOD BANK SEARCH": {
      columns: ["DATE","BLOOD BANK NAME", "BLOOD TYPE", "AMOUNT OF BLOOD"],
    },
  };

  const tableData = tables[tableName];

  if (!tableData) {
    return <div>No table found</div>;
  }

  const { columns } = tableData;
  const rows = generateRows(tableName, numRows);

  return (
    <div>
      <h2>{tableName}</h2>
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.values(row).map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function generateRows(tableName) {
  const rows = [];

  switch (tableName) {
    case "DONOR HISTORY":
      const nicValues = ["NIC1", "NIC2", "NIC3", "NIC4"];
      const dateValues=["1/2/12","8","8/9/10","9"];
      const bloodValues=["a"];
      const quantityValues=[1,2,3,3];
      const numRows=9;
      for (let i = 0; i < numRows; i++) {
        const row = {
          "NIC": nicValues[i],
          "DATE OF DONATION": dateValues[i],
          "BLOOD TYPE":  bloodValues[i],
          "QUANTITY OF BLOOD DONATED IN PINTS": quantityValues[i],
        };
        rows.push(row);
      }
      break;
    case "HOSPITAL HISTORY":
      const date = ["8th", "8", "9", "9"];
      const name=["monaragala","moratuwa"];
      const bloodtype=["a"];
      const quantity=[1,2,3,3];
      const numberRows=9;
      for (let i = 0; i < numberRows; i++) {
        const row = {
          "DATE": date[i],
          "NAME OF HOSPITAL":  name[i],
          "BLOODTYPE":bloodtype[i],
          "AMOUNT OF BLOOD": quantity[i]
        };
        rows.push(row);
      }
      break;
    case "BLOOD BANK HISTORY":
      const dateB = ["8th", "8", "9", "9"];
      const nameB=["monaragala","moratuwa"];
      const bloodtypeB=["a"];
      const quantityB=[1,2,3,3];
      const numberOfRows=9;
      for (let i = 0; i < numberOfRows; i++) {
        const row = {
          "DATE": dateB[i],
          "NAME OF BLOOD BANK": nameB[i],
          "BLOODTYPE": bloodtypeB[i],
          "AMOUNT OF BLOOD": quantityB[i]
        };
        rows.push(row);
      }
      break;
      case "DONOR SEARCH":
        const donornum = ["2", "8", "9", "9"];
        const nameD=["monaragala","moratuwa"];
        const telephone=["11"];
        const bloodtypeD=["A"];
        const location=["yyy"];
        const amtofblood=[10];
        const reward=[1];
        const comments=["k","j"];
        const numberofRows=9;
        for (let i = 0; i < numberofRows; i++) {
          const row = {
            "DONOR NUMBER": donornum[i],
            "NAME OF DONOR": nameD[i],
            "TELEPHONE DETAILS": telephone[i],
            "ENTER BLOOD TYPE": <input type="text" />,
            "ENTER LOCATION OF BLOOD BANK": <input type="text" />,
            "ENTER AMOUNT OF BLOOD DONATED":<input type="number"  />,
            "REWARD POINTS": reward[i],
            "ENTER COMMENTS ABOUT THE DONOR":<textarea></textarea>,
          };
          rows.push(row);
        }
        break;
        case "BLOOD BANK SEARCH":
      const date_b = ["8th", "8", "9", "9"];
      const name_b=["monaragala","moratuwa"];
      const bloodtype_b=["a"];
      const quantity_b=[1,2,3,3];
      const numberofrows=9;
      for (let i = 0; i < numberofrows; i++) {
        const row = {
          "DATE":date_b[i],
          "BLOOD BANK NAME": name_b[i],
          "BLOOD TYPE": bloodtype_b[i],
          "AMOUNT OF BLOOD": quantity_b[i]
        };
        rows.push(row);
      }
      break;
  }

  return rows;
}



export default Table;
