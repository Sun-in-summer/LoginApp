Ext.define('ModernApp.view.main.MainView', {
  extend: 'Ext.Container',
  xtype: 'mainview',
  controller: 'mainviewcontroller',
  layout: 'fit',
  items: [
    {
      xtype: 'toolbar',
      docked: 'top',
      items: [
        {
          text: 'Товары',
          handler: 'onProductsClick',
        },
        {
          text: 'Выход',
          handler: 'onLogoutClick',
        },
      ],
    },
    {
      xtype: 'tabpanel',
      reference: 'productTabs',
      tabPosition: 'top',
    },
  ],
});
