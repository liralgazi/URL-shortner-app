import * as React from "react";
import { UrlData } from "../../interface/UrlData";
import { serverUrl } from "../../helpers/Consts";
import axios from "axios";
import "./DataTable.css"; // Import CSS file

interface IDataTableProps {
  data: UrlData[];
  updateReloadState: () => void;
}

const DataTable: React.FunctionComponent<IDataTableProps> = ({
  data,
  updateReloadState,
}) => {
  console.log("Data in DataTable is: ", data);

  const copyToClipboard = async (url: string) => {
    try {
      await navigator.clipboard.writeText(`${serverUrl}/shortUrl/${url}`);
      alert(`URL copied: ${serverUrl}/shortUrl/${url}`);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUrl = async (id: string) => {
    const response = await axios.delete(`${serverUrl}/shortUrl/${id}`);
    console.log(response);
    updateReloadState();
  };

  const renderTableData = () => {
    return data.map((item) => (
      <tr key={item._id} className="table-row">
        <td className="table-cell">
          <a
            href={item.fullUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            {item.fullUrl}
          </a>
        </td>
        <td className="table-cell">
          <a
            href={`${serverUrl}/shortUrl/${item.shortUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            {item.shortUrl}
          </a>
        </td>
        <td className="table-cell">{item.clicks}</td>
        <td className="table-cell">
          <button
            className="button"
            onClick={() => copyToClipboard(item.shortUrl)}
          >
            Copy
          </button>
          <button className="button delete" onClick={() => deleteUrl(item._id)}>
            Delete
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            <th>Full URL</th>
            <th>Short URL</th>
            <th>Clicks</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
      </table>
    </div>
  );
};

export default DataTable;
