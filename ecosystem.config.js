module.exports = {
  apps : [{
    name: 'skullmasher.io',
    exec_mode: 'cluster',
    instances: '1',
    script: './node_modules/nuxt/bin/nuxt.js',
    args: 'start',
  }],
  deploy : {
    production : {
      user : 'web-skull',
      host : '5.39.85.45',
      key  : '~/.ssh/hg-webskull',
      ref  : 'origin/main',
      repo : 'git@github.com:SkullMasher/skull.services.git',
      path : '/home/web-skull/skull.services',
      'pre-deploy-local': '',
      'post-deploy' : 'yarn && yarn build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
