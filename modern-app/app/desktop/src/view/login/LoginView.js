Ext.define('ModernApp.view.login.LoginView', {
  extend: 'Ext.container.Container',
  xtype: 'loginview',
  controller: 'loginviewcontroller',
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
        },
        {
          xtype: 'textfield',
          label: 'Пароль',
          name: 'password',
          inputType: 'password',
          allowBlank: false,
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
