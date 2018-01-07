<style lang="less">
    @import './login.less';
</style>

<template>
    <div class="login" @keydown.enter="handleSubmit">
        <div class="login-con">
            <Card :bordered="false">
                <p slot="title">
                    <Icon type="log-in"></Icon>
                    欢迎登陆
                </p>
                <div class="form-con">
                    <Form ref="loginForm" :model="form" :rules="rules">
                        <FormItem prop="userName">
                            <Input v-model="form.username" placeholder="请输入用户名">
                                <span slot="prepend">
                                    <Icon :size="16" type="person"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="form.password" placeholder="请输入密码">
                                <span slot="prepend">
                                    <Icon :size="14" type="locked"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem >
                            <Button @click="handleSubmit" type="primary" long>登陆</Button>
                        </FormItem>
                    </Form>
                    <p class="login-tip">输入任意用户名和密码即可</p>               
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
import Cookies from 'js-cookie';
export default {
    name: 'name',
    data () {
        return {
            form: {
                userName: 'SYGL_ADMIN',
                password: ''
            },
            rules: {
                userName: [
                    { required: true, message: '请填写用户名', trigger: 'blur'}
                ],
                password: [
                    { required: true, message: '请填写密码', trigger: 'blur' },
                    { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        handleSubmit () {
            this.$refs.loginForm.validate((valid) => {
                if(valid) {
                    Cookies.set('user',this.form.userName);
                    Cookies.ser('password',this.form.password);
                    this.$store.commit('setAvator','https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg');
                    if(this.form.userName === 'SYGL_ADMIN') {
                        Cookies.set('access',0);
                    } else {
                        Cookies.set('access',1);
                    }
                    this.$router.push({
                        name: 'home_index'
                    });
                }
            });
        }
    }
}
</script>

<style scoped>

</style>
