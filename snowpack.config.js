// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: "/" },
    src: { url: "/dist" },
  },
  plugins: [
    "@snowpack/plugin-dotenv",
    "@snowpack/plugin-babel",
    [
      "@snowpack/plugin-sass",
      {
        native: true,
      },
    ],
  ],
  optimize: {
    bundle: true,
    minify: true,
    target: "es2020",
    splitting: true,
    treeshake: true,
  },
  routes: [{ match: "routes", src: ".*", dest: "/index.html" }],
};
