const myMixin = {
    data() {
        return {
            msg: '我是mixin'
        }
    },
    methods: {
        changeMsg() {
            this.msg = '改变mixin'
            console.log(this.msg);
        }
    },
    created() {
        console.log('created---Mixin');
    },
    mounted() {
        console.log('mounted---Mixin');
    },
}
export default myMixin