import WomenLogo from "./WomenLogo.png";
import MenLogo from "./MenLogo.jpeg";
import Link from "../Link/Link";
import { StyledContainer, StyledPaper } from "./Styles";

const Home = () => {
  return (
    <StyledContainer>
      <Link to="/men">
        <StyledPaper
          elevation={4}
          alt="The house from the offer."
          width={350}
          component="img"
          src={MenLogo}
        />
      </Link>
      <Link to="/women">
        <StyledPaper
          component="img"
          elevation={4}
          width={350}
          alt="The house from the offer."
          src={WomenLogo}
        />
      </Link>
    </StyledContainer>
  );
};

export default Home;
