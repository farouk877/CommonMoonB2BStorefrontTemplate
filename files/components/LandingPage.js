import styled from "styled-components/macro";

// Add video reverse icon
const Container = styled.div`
  height: "100%";
  width: "100%";
  display: "flex";
  justify-content: "center";
`;

const StyledLandingPage = styled.div`
  height: "100%";
  width: "100%";
  position: "absolute";
  background-color: ${(props) => props.color};
`;

const StyledLogoText = styled.div`
  top: 35%;
  height: 20%;
  font-size: 12em;
  position: fixed;
  text-shadow: 0px 4px 4px 0px #00000040;
  font-family: ${(props) => props.logoFont};
  color: ${(props) => props.logoTextColor};
`;

const StyledImage = styled.img`
  top: 20%;
  height: 35em;
  width: 60em;
  position: fixed;
`;

const StyledVideo = styled.video`
  top: 20%;
  height: 35em;
  width: 60em;
  position: fixed;
`;

const StyledButton = styled.button`
  background-color: ${(props) => props.buttonColor};
  color: ${(props) => props.buttonTextColor};
  font-family: ${(props) => props.buttonFont};
  position: fixed;
  top: 85%;
  height: 4em;
  width: 14em;
  border: none;
  box-shadow: 10px 9px 18px 10px rgba(0, 0, 0, 0.25);
`;

const LandingPage = (
  color,
  logoTextColor,
  logoText,
  logoFont,
  buttonColor,
  buttonTextColor,
  buttonText,
  buttonFont,
  imageURL,
  imageDescription,
  videoURL,
  videoDescription
) => {
  return (
    <div>
      {/* prettier-ignore */}
      <StyledLandingPage color={color}></StyledLandingPage>

      <StyledLogoText logoTextColor={logoTextColor} logoFont={logoFont}>
        {logoText}
      </StyledLogoText>

      <StyledButton
        buttonColor={buttonColor}
        buttonTextColor={buttonTextColor}
        buttonFont={buttonFont}
      >
        {buttonText}
      </StyledButton>

      {imageURL && <StyledImage src={imageURL} alt={imageDescription} />}
      {videoURL && <StyledVideo src={videoURL} alt={videoDescription} />}
    </div>
  );
};

export default LandingPage;
