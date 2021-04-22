import { expect, fixture, html, assert, elementUpdated, fixtureCleanup } from '@open-wc/testing';
import { setViewport } from '@web/test-runner-commands';
import '../src/lrndesign-drawer.js';


/* 
* Instantiation test 
* create element and see if an attribute binds to the element
*/
describe('Instantiation Test', () => {
    it('lrndesign-drawer instantiates', async () => {
      const el = await fixture(html` <lrndesign-drawer title="test-title"></lrndesign-drawer> `);
      await expect(el.getAttribute("title")).to.equal("test-title");
    });
});

/*
* A11y Accessibility tests
*/
describe('A11y/chai axe tests', () => {
    it('lrndesign-drawer passes accessibility test', async () => {
      const el = await fixture(html` <lrndesign-drawer></lrndesign-drawer> `);
      await expect(el).to.be.accessible();
    });
    it('lrndesign-drawer passes accessibility negation', async () => {
        const el = await fixture(html`<lrndesign-drawer aria-labelledby="lrndesign-drawer"></lrndesign-drawer>`);
        await assert.isNotAccessible(el);
    });
});


/*
// Custom properties test
describe("Custom Property Test", () => {
  it("lrndesign-drawer can instantiate a element with custom properties", async () => {
    const el = await fixture(html`<lrndesign-drawer .foo=${'bar'}></lrndesign-drawer>`);
    expect(el.foo).to.equal('bar');
  })
})
*/


/*
// Test if element is mobile responsive
describe('Test Mobile Responsiveness', () => {
    before(async () => {z   
      await setViewport({width: 375, height: 750});
    })
    it('sizes down to 360px', async () => {
      const el = await fixture(html`<lrndesign-drawer ></lrndesign-drawer>`);
      const width = getComputedStyle(el).width;
      expect(width).to.equal('360px');
    })
}) */

/*
// Test if element sizes up for desktop behavior
describe('Test Desktop Responsiveness', () => {
    before(async () => {
      await setViewport({width: 1000, height: 1000});
    })
    it('sizes up to 410px', async () => {
      const el = await fixture(html`<lrndesign-drawer></lrndesign-drawer>`);
      const width = getComputedStyle(el).width;
      expect(width).to.equal('410px');
    })
    it('hides mobile menu', async () => {
      const el await fixture(html`<lrndesign-drawer></lrndesign-drawer>`);
      const hidden = el.getAttribute('hidden');
      expect(hidden).to.equal(true);
    })
}) */

// clean up fixtures after all tests are complete
afterEach(() => {
    fixtureCleanup();
});
