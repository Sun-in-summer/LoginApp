Ext.define('ModernApp.view.card.ProductCard', {
  extend: 'Ext.form.Panel',
  xtype: 'productcard',
  controller: 'productcard',

  modal: true,
  title: 'Карточка товара',

  bodyPadding: 10,

  viewModel: {
    data: {
      product: {},
    },
  },

  items: [
    {
      xtype: 'textfield',
      name: 'name',
      label: 'Имя',
      readOnly: true,
      bind: '{product.name}',
    },

    {
      xtype: 'numberfield',
      name: 'price',
      label: 'Цена',
      minValue: 0,
      bind: '{product.price}',
    },
    {
      xtype: 'numberfield',
      name: 'quantity',
      label: 'Кол-во',
      minValue: 0,
      bind: '{product.quantity}',
    },
  ],
  buttons: [
    {
      text: 'Сохранить',
      handler: 'onSave',
    },
    {
      text: 'Отмена',
      handler: 'onCancel',
    },
  ],
});
