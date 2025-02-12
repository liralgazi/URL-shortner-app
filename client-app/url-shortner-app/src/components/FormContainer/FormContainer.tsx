import * as React from "react";
import axios from "axios";
import { serverUrl } from "../../helpers/Consts";
import "./FormContainer.css"; // Import CSS file

interface IFormContainerProps {
  updateReloadState: () => void;
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = ({
  updateReloadState,
}) => {
  const [fullUrl, setFullUrl] = React.useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(`${serverUrl}/shorturl`, { fullUrl });
      setFullUrl("");
      updateReloadState();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container">
      <h2>URL Shortener</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add your link here"
          required
          className="input-field"
          value={fullUrl}
          onChange={(e) => setFullUrl(e.target.value)}
        />
        <button type="submit" className="submit-button">
          Shorten URL
        </button>
      </form>
    </div>
  );
};

export default FormContainer;
