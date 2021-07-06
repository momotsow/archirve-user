import EmberRouter from '@ember/routing/router';
import config from 'user-archiving/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('users', function () {
    this.route('user', { path: '/:user_id' });
    this.route('index', { path: '/' });
  });
});
