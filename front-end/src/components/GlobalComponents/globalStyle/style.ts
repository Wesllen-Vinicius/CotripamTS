import { createGlobalStyle } from "styled-components"
import px2vw from "../../../utils/px2vw"

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  * {
    margin: 0;
    padding: 0;
  }

  :root {
      font-size: ${px2vw(18)};

      @media (min-width: 768px) {
        font-size: ${px2vw(18)};
        width: ${px2vw(320, 768)};
        min-height: ${px2vw(200, 768)};
        height: 80%;
        flex-direction: row;
      }

      @media (min-width: 1024px) {
      font-size: ${px2vw(16)};
      flex-wrap: nowrap;
      width: 100%;
    }
    }

`
