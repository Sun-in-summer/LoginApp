Ext.define('ModernApp.view.main.ProductsTab', {
  extend: 'Ext.container.Container',
  xtype: 'productstab',
  layout: 'vbox',
  items: [
    {
      xtype: 'container',
      layout: 'hbox',
      items: [
        {
          xtype: 'label',
          text: 'ID',
          margin: '0 10 0 0',
        },
        {
          xtype: 'textfield',
          reference: 'idFilter',
          listeners: {
            specialkey: 'onFilterEnter',
          },
        },
      ],
    },
    {
      xtype: 'container',
      layout: 'hbox',
      items: [
        {
          xtype: 'label',
          text: 'Описание',
          margin: '0 10 0 10',
        },
        {
          xtype: 'textfield',
          reference: 'descriptionFilter',
          listeners: {
            specialkey: 'onFilterEnter',
          },
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
    },
  ],
});
