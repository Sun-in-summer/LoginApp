Ext.define('ModernApp.view.login.LoginViewController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.loginviewcontroller',

  onLoginButtonClick: function (button) {
    var form = this.getView().down('formpanel'); // Ищем formpanel внутри текущего представления

    if (form) {
      var values = form.getValues();

      if (values.username === 'admin' && values.password === 'padmin') {
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
