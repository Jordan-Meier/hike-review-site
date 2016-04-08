import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('display-favorites', 'Integration | Component | display favorites', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{display-favorites}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#display-favorites}}
      template block text
    {{/display-favorites}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
