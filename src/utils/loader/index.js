import Loader from "react-loader-spinner";
import './spinner.css'
const Spinner = () => {
  return (
    <div className="spinner">
      <Loader type="Oval" color="#816263" height={80} width={80} />
    </div>
  );
};

export default Spinner;
