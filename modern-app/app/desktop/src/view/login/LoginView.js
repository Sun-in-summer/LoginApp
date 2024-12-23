Ext.define('ModernApp.view.login.LoginView', {
  extend: 'Ext.form.Panel',
  xtype: 'loginview',
  controller: 'loginviewcontroller',
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
      formBind: true,
      type: 'submit',
    },
  ],
});
