/** @type {import('next').NextConfig} */
import path from "path";

const nextConfig = {
  sassOptions: {
    includePaths: [path.join("_src/app/", "styles")],
  },
};

export default nextConfig;
