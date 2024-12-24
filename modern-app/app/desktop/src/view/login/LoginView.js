Ext.define('ModernApp.view.login.LoginView', {
  extend: 'Ext.container.Container',
  xtype: 'loginview',
  controller: 'loginviewcontroller',
  viewModel: {
    data: {
      login: {},
    },
  },
  layout: {
    type: 'hbox',
    align: 'middle',
    pack: 'center',
  },
  items: [
    {
      xtype: 'formpanel',
      width: 300,
      bodyPadding: 10,
      title: 'Форма входа',
      cls: 'login-form',
      items: [
        {
          xtype: 'textfield',
          label: 'Логин',
          name: 'username',
          allowBlank: false,
          bind: '{login.username}',
          listeners: {
            specialkey: 'onSpecialKey',
          },
        },
        {
          xtype: 'textfield',
          label: 'Пароль',
          name: 'password',
          inputType: 'password',
          allowBlank: false,
          bind: '{login.password}',
          listeners: {
            specialkey: 'onSpecialKey',
          },
        },
      ],
      buttons: [
        {
          text: 'Вход',
          formBind: true,
          handler: 'onLoginButtonClick',
          type: 'submit',
        },
      ],
    },
  ],
});
