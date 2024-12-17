// import type { StorybookConfig } from "@storybook/react-webpack5";

// const config: StorybookConfig = {
//   stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
//   addons: [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     "@storybook/addon-onboarding",
//     "@storybook/addon-interactions",
//   ],
//   framework: {
//     name: "@storybook/react-webpack5",
//     options: {
//       builder: {
//         useSWC: true,
//       },
//     },
//   },
//   docs: {
//     autodocs: "tag",
//   },
// };
// export default config;

module.exports = {
  stories: ["../../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  options: {
    builder: {
      useSWC: true,
    },
  },

  framework: "@storybook/react-webpack5",
  docs: {
    autodocs: "tag",
  },
  core: {
    builder: "webpack5",
  },
};
