import ProductDetailsModule from './productDetails';
import ProductDetailsController from './productDetails.controller';
import ProductDetailsComponent from './productDetails.component';
import ProductDetailsTemplate from './productDetails.html';

describe('ProductDetails', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ProductDetailsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ProductDetailsController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(ProductDetailsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = ProductDetailsComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ProductDetailsTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ProductDetailsController);
    });
  });
});
