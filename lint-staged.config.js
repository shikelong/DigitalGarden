module.exports = {
  "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": ["prettier --write"],
  "src/**/*.{ts,tsx}": [() => "tsc --noEmit --locale zh-CN"],
}
