Ext.define('ModernApp.view.main.ProductsTab', {
  extend: 'Ext.container.Container',
  xtype: 'productstab',
  controller: 'products',
  layout: 'vbox',
  items: [
    {
      xtype: 'container',
      layout: 'hbox',
      items: [
        {
          xtype: 'textfield',
          reference: 'idFilter',
          label: 'ID',
          labelAlign: 'left',
          labelWidth: 70,
          listeners: {
            specialkey: 'onFilterEnter',
          },
          margin: '0 10 0 10',
        },
      ],
    },
    {
      xtype: 'container',
      layout: 'hbox',
      items: [
        {
          xtype: 'textfield',
          reference: 'descriptionFilter',
          label: 'Описание',
          labelAlign: 'left',
          labelWidth: 70,
          listeners: {
            specialkey: 'onFilterEnter',
          },
          margin: '0 10 0 10',
        },
      ],
    },
    {
      xtype: 'grid',
      reference: 'productGrid',
      flex: 1,
      store: { type: 'productstore' },
      columns: [
        { text: 'ID', dataIndex: 'id', width: 50 },
        { text: 'Имя', dataIndex: 'name', flex: 1, renderer: 'renderName' },
        { text: 'Описание', dataIndex: 'description', flex: 1 },
        { text: 'Цена', dataIndex: 'price', width: 100 },
        {
          text: 'Кол-во',
          dataIndex: 'quantity',
          width: 100,
          cell: {
            encodeHtml: false,
          },
          renderer: function (value) {
            if (value === 0) {
              console.log('IF workS');
              return (
                '<span class="zero-quantity">' +
                Ext.String.htmlEncode(value) +
                '</span>'
              );
            }

            return Ext.String.htmlEncode(value);
          },
        },
      ],
      listeners: {
        initialize: 'setupListeners',
      },
    },
  ],
});
