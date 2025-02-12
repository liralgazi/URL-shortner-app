import * as React from "react";
import FormContainer from "../FormContainer/FormContainer";
import { UrlData } from "../../interface/UrlData";
import axios from "axios";
import { serverUrl } from "../../helpers/Consts";
import DataTable from "../DataTable/DataTable";

interface IContainerProps {}

const Container: React.FunctionComponent<IContainerProps> = () => {
  const [data, setData] = React.useState<UrlData[]>([]);

  //creating a function that will fetch the data from the db
  const fetchTableData = async () => {
    const response = await axios.get(`${serverUrl}/shortUrl`);
    console.log("The response from server is: ", response);
    setData(response.data);
    console.log("Data: ", data);
  };

  // setting useEffect to make the call
  React.useEffect(() => {
    fetchTableData();
  }, []);
  return (
    <>
      <FormContainer />;
      <DataTable data={data} />
    </>
  );
};

export default Container;
