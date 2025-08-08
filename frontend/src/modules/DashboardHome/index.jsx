import AddTimeButton from "./components/AddTimeButton";
import DashboardHomeGrid from "../../modules/DashboardHome/components/DashboardHomeGrid";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentTime } from "store/thunks/dashboardhome-thunk";
import { getAllTimes } from "store/thunks/dashboardhome-thunk";
import MenuHeaders2 from "./components/MenuHeadersTest";
import MenuHeadersSort from "./components/MenuHeadersTestSort";
import "common/styles.css";

const MenuHeaders = () => {
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
      Destination: "Cleveland",
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
      Alerts: "Low days of service",
      ExpandedData: {
        ProductNumber: "BQ-1017",
        Pallets: "25",
        Status: "Backlog",
        ProductName: "Detergent A",
        Destination: "Warehouse X",
      },
    },
  ];

  const data = mock.slice();

  return (
    <table className="tablestyles">
      <thead className="theadstyles">
        <tr className="trheadstyles">
          {/* need to make these th buttons so that you can click for sorting */}
          <th className="thheadstyles">Expand</th>
          <th className="thheadstyles">ID</th>
          <th className="thheadstyles">Staging</th>
          <th className="thheadstyles">Destination</th>
          <th className="thheadstyles">Alerts</th>
        </tr>
      </thead>
      <tbody id="plant-table-body">
        {data.map((row) => {
          return (
            <tr className="trbodystyles" key={row.ID}>
              <td className="tdbodyleftstyles">
                <div className="tdcontentwrapper">
                  <span className="tdcontentspan">
                    <input type="checkbox" />
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
                  <span className="tdcontentspan">{row.Staging}</span>
                </div>
              </td>
              <td className="tdbodyleftstyles">
                <div className="tdcontentwrapper">
                  <span className="tdcontentspan">{row.Destination}</span>
                </div>
              </td>
              <td className="tdbodyleftstyles">
                <div className="tdcontentwrapper">
                  <span className="tdcontentspan">{row.Alerts}</span>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const DashboardHome = () => {
  const dispatch = useDispatch();
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    dispatch(getAllTimes());
  }, [dispatch]);

  const handleAddTime = () => {
    const currentTime = new Date().toLocaleTimeString();
    dispatch(addCurrentTime(currentTime));
    setShowAdd(true);
  };

  const currentTime = useSelector(
    (state) => state.dashboardHome?.currentTime || ""
  );

  return (
    <div className="home-container">
      <DashboardHomeGrid onAddTime={handleAddTime} />
      <AddTimeButton showAdd={showAdd} currentTime={currentTime} />
      {/* <MenuHeaders2 /> */}
      <MenuHeadersSort />
    </div>
  );
};

export default DashboardHome;
