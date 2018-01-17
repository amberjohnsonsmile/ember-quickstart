import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return ['Musician Amber', 'Web Developer Amber', 'Sister Amber'];
  }
});
