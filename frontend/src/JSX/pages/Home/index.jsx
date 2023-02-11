import { Link } from "react-router-dom";

const Home = () => {
  return (
    <h4>
      go to : <Link to={"/test?abc=dope&k=2"}>Test</Link>
    </h4>
  );
};

export default Home;
