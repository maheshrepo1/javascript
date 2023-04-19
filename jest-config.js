module.exports = {
  moduleNameMapper: {
    "\\.(css|sass)$": "identity-obj-proxy",
  },
  verbose: true,
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleDirectories: ["node_modules", "src"],
  transform: {
    "^.+\\.ts?$": "ts-jest",
    "^.+\\.tsx?$": "ts-jest"
  },
  

};