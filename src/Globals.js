import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
a {
    text-decoration: none;
}

:root {
  --hover-color: #c99e3a;
  --menuBar-color: white;
  --box-color: #ffffff;
  --bg-color: #FCF5E5;
  --second-color: #ffd269;
  --text-color: #000000;
  --icon-them: black;
  --text-color: black;
}

.dark-theme {
  --hover-color: #1a2470;
  --menuBar-color: #000025;
  --box-color: #00547f;
  --bg-color: #313873;
  --text-color: #ffffff;
  --icon-them: white;
  --second-color: #313873;
  --text-color: #ffffff;
}
`;

export default GlobalStyle