module.exports = {
  apps: [
    {
      name: 'skullmasher.io',
      port: '3001',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ],
  // deploy: {
  //   production: {
  //     'user': 'SSH_USERNAME',
  //     'host': 'SSH_HOSTMACHINE',
  //     'ref': 'origin/master',
  //     'repo': 'GIT_REPOSITORY',
  //     'path': 'DESTINATION_PATH',
  //     'pre-deploy-local': '',
  //     'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
  //     'pre-setup': '',
  //   },
  // },
}
