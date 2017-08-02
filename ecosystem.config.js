module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [

    // First application
    {
      name: "lila_activities",
      max_memory_restart: "1024M",
      log_date_format: "YYYY-MM-DD HH:mm:ss SSS",
      script: "./bin/www",
      out_file: "/var/log/lila_activities/app.log",
      error_file: "/var/log/lila_activities/err.log",
      port: "3080",
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    },
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy: {
    production: {
      user: 'root',
      host: '116.62.195.14',
      ref: 'origin/master',
      repo: 'git@github.com:sqzxcv/DynamicProxyIP.git',
      path: '/var/www/DynamicProxyIP',
      // "post-deploy": 'git pull && workon scrapyd_py3.6.1 && npm install && pm2 reload scrapyd -x --interpreter /root/Envs/scrapyd_py3.6.1/bin/python'
      "post-deploy": './start.sh'
    }
  }
};