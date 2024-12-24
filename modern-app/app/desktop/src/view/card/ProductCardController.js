Ext.define('ModernApp.view.card.ProductCardController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.productcard',

  onSave: function () {
    var form = this.getView();
    if (form && form.isValid()) {
      form.getViewModel().get('product').commit();
      form.up('window').close();
    }
  },

  onCancel: function () {
    var form = this.getView();

    form.getViewModel().get('product').reject();
    form.up('window').close();
  },
});
