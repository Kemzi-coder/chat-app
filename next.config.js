/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	eslint: {dirs: ["src", "__tests__"]}
};

module.exports = nextConfig;
