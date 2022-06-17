module.exports = {
  apps: [
    {
      name: "aagrispot -> Backend",
      script: "cd API && npm run dev-start"
    },
    {
      name: "aagrispot -> Frontend",
      script: "cd Frontend && npm run dev"
    }
  ]
}
