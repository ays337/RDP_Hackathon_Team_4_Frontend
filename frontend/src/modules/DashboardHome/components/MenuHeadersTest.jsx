import React, { useState } from "react";
import {} from "react-redux";
import {} from "store/thunks/dashboardhome-thunk";
import {} from "store/thunks/dashboardhome-thunk";
import "common/styles.css";
const MenuHeaders2 = () => {
  const mock = [
    {
      ID: "1",
      Staging: "Early",
      Destination: "Florida",
      Alerts: "None",
      ExpandedData: {
        ProductNumber: "DA-1001",
        Pallets: "25",
        Status: "Backlog",
        ProductName: "Detergent A",
        Destination: "Warehouse X",
      },
    },
    {
      ID: "2",
      Staging: "Early",
      Destination: "NYC",
      Alerts: "None",
      ExpandedData: {
        ProductNumber: "CB-1002",
        Pallets: "293",
        Status: "Backlog",
        ProductName: "Cleaner B",
        Destination: "Warehouse Y",
      },
    },
    {
      ID: "3",
      Staging: "Early",
      //   Destination: "Cleveland",
      Alerts: "None",
      ExpandedData: {
        ProductNumber: "DO-1015",
        Pallets: "342",
        Status: "Backlog",
        ProductName: "Polish F",
        Destination: "Warehouse Z",
      },
    },
    {
      ID: "4",
      Staging: "Early",
      Destination: "Chicago",
      //   Alerts: "Low days of service",
      ExpandedData: {
        ProductNumber: "BQ-1017",
        Pallets: "25",
        Status: "Backlog",
        ProductName: "Detergent A",
        Destination: "Warehouse X",
      },
    },
  ];

  const sortedmock = mock.slice().sort((a, b) => Number(b.ID) - Number(a.ID));

  console.log(sortedmock);

  const [expandedRows, setExpandedRows] = useState({});
  //Create a state to toggle on or off expaded view (Use an object so we can link the rowID with true/false  {rowID:t/f, rowID:t/f ..})

  const toggleRow = (id) => {
    setExpandedRows((prev) => ({
      //pass in the expanded rows object as prev
      ...prev, //spread the expandedRowsobject
      [id]: !prev[id],
      //use computed object literal noation to "add" (more of an update) a row ID key and set the value which is prev[id](object[key] = value) to the negation of itself
      //So essentially spread the state, update the key to the negation
    }));
  };

  return (
    <table className="tablestyles">
      <thead className="theadstyles">
        <tr className="trheadstyles">
          <th className="thheadstyles">Select</th>
          <th className="thheadstyles">ID</th>
          <th className="thheadstyles">Staging</th>
          <th className="thheadstyles">Destination</th>
          <th className="thheadstyles">Alerts</th>
        </tr>
      </thead>
      <tbody id="plant-table-body">
        {sortedmock.map((row) => (
          <>
            <tr className="trbodystyles" key={row.ID}>
              <td className="tdbodyleftstyles">
                <div className="tdcontentwrapper">
                  <span className="tdcontentspan">
                    <input
                      type="checkbox"
                      checked={expandedRows[row.ID] === true}
                      onChange={() => toggleRow(row.ID)}
                    />
                  </span>
                </div>
              </td>
              <td className="tdbodyleftstyles">
                <div className="tdcontentwrapper">
                  <span className="tdcontentspan">{row.ID}</span>
                </div>
              </td>
              <td className="tdbodyleftstyles">
                <div className="tdcontentwrapper">
                  <span className="tdcontentspan">{row.Staging ?? "N/A"}</span>
                </div>
              </td>
              <td className="tdbodyleftstyles">
                <div className="tdcontentwrapper">
                  <span className="tdcontentspan">
                    {row.Destination ?? "N/A"}
                  </span>
                </div>
              </td>
              <td className="tdbodyleftstyles">
                <div className="tdcontentwrapper">
                  <span className="tdcontentspan">{row.Alerts ?? "N/A"}</span>
                </div>
              </td>
            </tr>
            {expandedRows[row.ID] && (
              <tr>
                <td colSpan={5}>
                  <div style={{ padding: "10px", backgroundColor: "#f9f9f9" }}>
                    <strong>Expanded Data:</strong>
                    <ul style={{ marginTop: "5px" }}>
                      {Object.entries(row.ExpandedData).map(([key, value]) => (
                        <li key={key}>
                          <strong>{key}:</strong> {value}
                        </li>
                      ))}
                    </ul>
                  </div>
                </td>
              </tr>
            )}
          </>
        ))}
      </tbody>
    </table>
  );
};

export default MenuHeaders2;
