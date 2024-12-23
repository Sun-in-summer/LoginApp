Ext.define('ModernApp.view.login.LoginViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.loginviewcontroller',

  onLoginButtonClick: function (button) {
    var form = this.getView(); // Получаем ссылку на форму
    var values = form.getValues();

    if (values.username === 'admin' && values.password === 'padmin') {
      Ext.Msg.alert('Успех', 'Добро пожаловать!');
      // Переход на главное окно
      Ext.Viewport.removeAll();
      Ext.Viewport.add([{ xtype: 'mainview' }]);
    } else {
      Ext.Msg.alert('Ошибка', 'Неправильный логин или пароль.');
    }
  },
});
