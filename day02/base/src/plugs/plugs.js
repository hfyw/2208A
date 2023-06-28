const MyPlugin = function install(Vue, options) {
    // 1. 添加全局方法或 property
    Vue.myFangfa = (aaa) => {
        return aaa.sort((a, b) => a - b)
    }

    // 2. 添加自定义指令
    Vue.directive('big', {
        bind(el, binding) {
            el.innerText = binding.value * 10
        }

    })

    // 3. 注入组件选项
    Vue.mixin({
        created: function () {
            console.log('我是混入');
        }

    })
    // 4. 添加实例方法
    Vue.prototype.myMethod = function (methodOptions) {
        alert('实例方法')
    }
}
export default MyPlugin