import esbuild from "esbuild";

esbuild.buildSync({
  entryPoints: ["./src/index.js"],
  outfile: "./public/dist/app.mjs",
  platform: "browser",
  format: "esm",
  loader: { ".js": "jsx" },
  target: ["esnext"],
  bundle: true,
  define: {
    "process.env.NODE_ENV": '"development"',
    "process.env.PLATFORM": '"browser"',
    "process.env.API_URL": '"https://jsonplaceholder.typicode.com"',
  },
});
