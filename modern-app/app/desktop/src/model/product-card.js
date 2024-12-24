Ext.define('ModernApp.model.ProductCard', {
  extend: 'Ext.data.Model',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'price', type: 'number' },
    { name: 'quantity', type: 'number' },
  ],
});
