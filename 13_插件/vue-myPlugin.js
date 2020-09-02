// 自定义vue的插件模块

(function (window) {

    // 定义插件对象
    const MyPlugin = {}

    // 插件对象上必须有一个install方法
    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或 property
        Vue.myGlobalMethod = function () {
          // 逻辑...
          console.log('Vue.myGlobalMethod()')
        }
      
        // 2. 添加全局资源
        Vue.directive('my-directive', (el,binding) => {
            el.textContent = binding.value
        })
      
        // // 3. 注入组件选项
        // Vue.mixin({
        //   created: function () {
        //     // 逻辑...
        //   }
        //   ...
        // })
      
        // 4. 添加实例方法
        Vue.prototype.$myMethod = function (methodOptions) {
          // 逻辑...
        }
      }
})(window)