module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            "components": "./src/components/",
            "containers": "./src/containers/",
            "utils": "./src/utils/",
            "hooks": "./src/hooks/",
            "assets": "./src/assets/",
            "contants": "./src/utils/constants.ts",
            "types": "./src/types.ts"
          },
        },
      ],
    ],
  };
};
