export default {
  server: {
    host: '0.0.0.0',
    port: 5000,
    strictPort: true,
    hmr: {
      clientPort: 443,
      protocol: 'wss'
    },
    watch: {
      usePolling: true
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    allowedHosts: ['fa96b03d-e089-458e-a060-6a1e3398846f-00-2l4u6m5zd8isa.janeway.replit.dev', 'replit.dev', '.replit.dev', '*.replit.dev']
  }
}
