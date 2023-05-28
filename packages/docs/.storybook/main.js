/** @type { import('@storybook/react').StorybookConfig } */
/** @type { import('@storybook/builder-vite').StorybookConfig } */

const config  = {
  stories: ["../src/pages/**/*.mdx", "../src/stories/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-a11y'
  ],
  framework: {
    name: "@storybook/react",
    options: {},
  },
  core: {
    builder: "@storybook/builder-vite"
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal (config,{configType}){
    if(configType === 'PRODUCTION'){
      config.base = '/design-system-mvs-ui/'
    }
    return config;
  }
  
};
export default config;
