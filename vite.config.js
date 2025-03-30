export default {
  server: {
    host: "0.0.0.0",
    port: 5000,
    strictPort: true,
    hmr: {
      clientPort: 443,
      protocol: "wss",
    },
    watch: {
      usePolling: true,
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    allowedHosts: ["*.replit.dev"],
  },
};
