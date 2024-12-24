Ext.define('ModernApp.view.product.ProductsController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.products',

  init: function () {
    var grid = this.lookupReference('productGrid');

    if (!grid) {
      console.error('Grid is not available');
      return;
    }
    grid.on('childtap', this.onGridChildTap, this);
  },

  onGridChildTap: function (grid, location) {
    var record = location.record;
    if (record) {
      console.log('Item clicked:', record.getData());
      this.showProductCard(record);
    }
  },

  showProductCard: function (record) {
    var store = Ext.data.StoreManager.lookup('ModernApp.store.ProductStore');
    if (!store) {
      console.error('ProductStore not found');
      return;
    }

    var productWindow = Ext.create('Ext.window.Window', {
      modal: true,
      layout: 'fit',
      width: 800,
      height: 400,

      items: {
        xtype: 'productcard',
        viewModel: {
          data: {
            product: record,
          },
        },
      },
    });

    productWindow.show();
  },

  renderName: function (value) {
    return Ext.String.htmlEncode(value);
  },

  onFilterEnter: function (field, e) {
    if (e.getKey() === e.ENTER) {
      this.applyFilters();
    }
  },

  applyFilters: function () {
    var grid = this.getView().down('grid');
    store = grid.getStore();
    viewModel = this.getViewModel();
    idFilter = viewModel.get('idFilter');
    descriptionFilter = viewModel.get('descriptionFilter');

    store.clearFilter();

    if (idFilter.value) {
      store.filterBy(function (record) {
        return record.get('id').toString() === idFilter.value;
      });
    }

    if (descriptionFilter.value) {
      store.filterBy(
        function (record) {
          console.log(descriptionFilter.value.toLowerCase());
          console.log(
            record
              .get('description')
              .toLowerCase()
              .includes(descriptionFilter.value.toLowerCase())
          );
          return record
            .get('description')
            .toLowerCase()
            .includes(descriptionFilter.value.toLowerCase());
        },
        null,
        null,
        true
      );
    }

    if (!idFilter.value && !descriptionFilter.value) {
      store.clearFilter();
    }
  },
});
