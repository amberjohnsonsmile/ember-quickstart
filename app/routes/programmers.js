import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return ['Ada Lovelace', 'Grace Hopper', 'Alan Turing'];
  }
});
