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
export default {
  parameters: {},
  decorators: [StyleDecorator],
};
