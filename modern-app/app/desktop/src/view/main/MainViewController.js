Ext.define('ModernApp.view.main.MainViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.mainviewcontroller',

  onProductsClick: function () {
    var tabPanel = this.lookup('productTabs');
    var newTab = tabPanel.add({
      xtype: 'productstab',
      title: 'Товары ' + (tabPanel.items.length + 1),
      closable: true,
    });
    tabPanel.setActiveItem(newTab);
  },

  onLogoutClick: function () {
    Ext.Viewport.removeAll();
    Ext.Viewport.add({ xtype: 'loginview' });
  },

  onFilterEnter: function (field, e) {
    if (e.getKey() === e.ENTER) {
      var idFilter = this.lookup('idFilter').getValue().toLowerCase(),
        descriptionFilter = this.lookup('descriptionFilter')
          .getValue()
          .toLowerCase(),
        store = this.lookup('productGrid').getStore();

      store.clearFilter(true);
      store.filterBy(function (record) {
        var matchesId = idFilter
          ? record.get('id').toString() === idFilter
          : true;
        var matchesDescription = descriptionFilter
          ? record.get('description').toLowerCase().includes(descriptionFilter)
          : true;
        return matchesId && matchesDescription;
      });
    }
  },

  renderName: function (value, metaData, record) {
    metaData.style = 'cursor:pointer';
    return value;
  },

  onGridItemClick: function (view, record, item, index, e, options) {
    var fieldName = e.position.column.dataIndex;
    if (fieldName === 'name') {
      this.openProductCard(record);
    }
  },

  openProductCard: function (record) {
    Ext.create('Ext.window.Window', {
      title: 'Карточка товара',
      modal: true,
      items: [
        {
          xtype: 'form',
          defaultType: 'textfield',
          items: [
            {
              fieldLabel: 'Имя',
              name: 'name',
              value: record.get('name'),
              readOnly: true,
            },
            {
              fieldLabel: 'Описание',
              name: 'description',
              value: record.get('description'),
              readOnly: true,
            },
            {
              fieldLabel: 'Цена',
              name: 'price',
              value: record.get('price'),
              xtype: 'numberfield',
              allowBlank: false,
              minValue: 0,
            },
            {
              fieldLabel: 'Кол-во',
              name: 'quantity',
              value: record.get('quantity'),
              xtype: 'numberfield',
              allowBlank: false,
              minValue: 0,
            },
          ],
          buttons: [
            {
              text: 'Сохранить',
              handler: function (btn) {
                var win = btn.up('window'),
                  form = win.down('form').getForm(),
                  values = form.getValues();

                if (form.isDirty()) {
                  Ext.Msg.alert('Изменения', 'Измененные данные сохранены.');
                  record.set(values);
                }
                win.close();
              },
            },
            {
              text: 'Отмена',
              handler: function (btn) {
                btn.up('window').close();
              },
            },
          ],
        },
      ],
    }).show();
  },
});
