Ext.define('ModernApp.view.product.ProductsController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.products',

  init: function () {
    console.log('Controller initialized');
    this.control({
      'productstab grid': {
        afterrender: this.setupListeners,
      },
    });
  },

  setupListeners: function () {
    console.log('setupListeners called');

    var grid = this.lookupReference('productGrid');

    if (!grid) {
      console.error('Grid is not available');
      return;
    }
    grid.on('childtap', this.onGridChildTap, this);
  },

  onGridChildTap: function (grid, location) {
    var record = location.record;
    console.log('Item clicked:', record.getData());

    this.showProductCard(record);
  },

  showProductCard: function (record) {
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
    var grid = this.getView().down('grid'),
      store = grid.getStore(),
      idFilter = this.lookupReference('idFilter').getValue(),
      descriptionFilter = this.lookupReference('descriptionFilter').getValue();

    store.clearFilter();

    if (idFilter) {
      store.filterBy(function (record) {
        return record.get('id').toString() === idFilter;
      });
    }

    if (descriptionFilter) {
      store.filterBy(
        function (record) {
          return record
            .get('description')
            .toLowerCase()
            .includes(descriptionFilter.toLowerCase());
        },
        null,
        null,
        true
      );
    }

    if (!idFilter && !descriptionFilter) {
      store.clearFilter();
    }
  },
});
