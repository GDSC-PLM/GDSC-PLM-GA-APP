import React from "react";
import { addDecorator } from "@storybook/react";
import { GlobalStyles } from "../src/styles/globalStyles";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withGlobalStyles = (storyFn) => {
  return (
    <>
      <GlobalStyles />
      <>{storyFn()}</>
    </>
  );
};

addDecorator(withGlobalStyles);
