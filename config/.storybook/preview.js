// import type { Preview } from "@storybook/react";
import { StyleDecorator } from "./../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// };
import "../../src/app/styles/index.scss";
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from "app/providers/ThemeProvider";

export default {
  parameters: {},
  decorators: [ThemeDecorator(Theme.LIGHT)],
  
};
