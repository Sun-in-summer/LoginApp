Ext.define('ModernApp.view.login.LoginViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.loginviewcontroller',
  username: 'admin',
  password: 'padmin',

  onSpecialKey: function (field, e) {
    if (e.getKey() === e.ENTER) {
      e.stopEvent();
      this.onLoginButtonClick();
    }
  },

  onLoginButtonClick: function (button) {
    var form = this.getView().down('formpanel');

    if (form) {
      var values = form.getValues();

      if (
        values.username === this.username &&
        values.password === this.password
      ) {
        Ext.Msg.alert('Успех', 'Добро пожаловать!');

        Ext.Viewport.removeAll();

        Ext.Viewport.add([{ xtype: 'mainview' }]);
      } else {
        Ext.Msg.alert('Ошибка', 'Неправильный логин или пароль.');
      }
    } else {
      Ext.Msg.alert('Ошибка', 'Форма не найдена.');
    }
  },
});
