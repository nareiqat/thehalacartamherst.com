import { CircularProgress } from "@material-ui/core";
import "./style.css";

const Loading = () => (
  <div className="loading">
    <CircularProgress />
  </div>
);

export default Loading;