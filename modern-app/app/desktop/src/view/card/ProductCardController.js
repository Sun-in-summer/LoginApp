Ext.define('ModernApp.view.card.ProductCardController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.productcard',

  onSave: function () {
    var form = this.getView();
    if (form && form.isValid()) {
      var product = form.getViewModel().get('product');
      var store = Ext.data.StoreManager.lookup('ModernApp.store.ProductStore');

      var record = store.getById(product.get('id'));
      if (record) {
        record.set(product.getData());
        store.commitChanges();
      }

      form.up('window').close();

      const productTabs = Ext.ComponentQuery.query('productstab');
      productTabs.forEach((tab) => {
        const grid = tab.down('grid');
        if (grid && grid.getStore) {
          grid.getStore().reload();
        }
      });
    }
  },

  onCancel: function () {
    var form = this.getView();

    form.getViewModel().get('product').reject();
    form.up('window').close();
  },
});
