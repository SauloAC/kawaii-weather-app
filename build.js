const fs = require("fs");
const path = require("path");

// Create dist directory structure
const dirs = ["dist", "dist/js", "dist/css", "dist/assets"];
dirs.forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

let htmlContent = fs.readFileSync("src/public/main.html", "utf8");
const googleApiKey = process.env.GOOGLE_MAPS_API_KEY || "";
htmlContent = htmlContent.replace(
  /key=[A-Za-z0-9_-]+&libraries=places/,
  `key=${googleApiKey}&libraries=places`
);
fs.writeFileSync("dist/index.html", htmlContent);

// Copy all JS files
const jsDir = "src/public/js";
const files = fs.readdirSync(jsDir);
files.forEach((file) => {
  if (file.endsWith(".js") && file !== "config.js") {
    fs.copyFileSync(path.join(jsDir, file), path.join("dist/js", file));
  }
});

// Copy main.js
fs.copyFileSync("src/public/main.js", "dist/main.js");

// Create config.js in dist from environment variables
const configContent = `export const config = {
  apiKey: "${process.env.OPENWEATHER_API_KEY || ""}",
  googleApiKey: "${process.env.GOOGLE_MAPS_API_KEY || ""}"
};
`;
fs.writeFileSync("dist/js/config.js", configContent);

// Copy assets folder if it exists
const assetsDir = "src/public/assets";
if (fs.existsSync(assetsDir)) {
  const copyDir = (src, dest) => {
    fs.mkdirSync(dest, { recursive: true });
    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);

      if (entry.isDirectory()) {
        copyDir(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  };

  copyDir(assetsDir, "dist/assets");
}

console.log("Build completed successfully!");
