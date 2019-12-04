Package.describe({
  name: 'pgiani:astronomy-timestamp-behavior',
  version: '2.0.0',
  summary: 'redis-oplog compatible timestamp behavior for Meteor Astronomy',
  git: 'https://github.com/pgiani/meteor-astronomy-timestamp-behavior',
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');

  api.use(
    ['ecmascript', 'es5-shim', 'pgiani:redis-astronomy@1.0.0'],
    ['client', 'server'],
  );

  api.mainModule('lib/main.js', ['client', 'server']);
});
