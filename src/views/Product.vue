<template lang="pug">
    .product
        h1 产品列表
        el-row.mb10
            el-button(type="primary", size="small", @click="isVisibleForm = true;") 新增
        el-table(:data="products", border)
            el-table-column(prop="name", label="名称")
            el-table-column(label="logo")
                template(slot-scope="scope")
                    img(width="50",height="50",:src="scope.row.logo")
            el-table-column(prop="author", label="作者")
            el-table-column(prop="releaseTime", label="发布时间")
            el-table-column(prop="starNum", label="订阅人数")
            el-table-column(prop="desc", label="描述")
            el-table-column(label="操作")
                template(slot-scope="scope")
                    el-button(size="small") 编辑
                    el-button(size="small") 删除
        el-dialog(title="产品", :visible.sync="isVisibleForm")
            el-form(:model="form")
                el-form-item(label="名称", :label-width="formLabelWidth")
                    el-input(v-model="form.name")
                //- TODO: 上传图片功能
                el-form-item(label="logo", :label-width="formLabelWidth")
                    el-input(v-model="form.logo")
                el-form-item(label="作者", :label-width="formLabelWidth")
                    el-input(v-model="form.author")
                el-form-item(label="发布时间", :label-width="formLabelWidth")
                    el-input(v-model="form.releaseTime")
                el-form-item(label="订阅人数", :label-width="formLabelWidth")
                    el-input(v-model="form.starNum")
                el-form-item(label="备注", :label-width="formLabelWidth")
                    el-input(v-model="form.desc", type="textarea")
            div(slot="footer", class='="dialog-footer"')
                el-button(@click="isVisibleForm = false;") 取消
                el-button(@click="addProduct", type="primary") 确定
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {apiProductList, apiProductAdd} from '../apis';

@Component({})
export default class Product extends Vue {
    private products: object = [];
    private isVisibleForm: boolean = false;     // 显示表单弹窗
    private form: object = {
        name: '',
        logo: '',
        releaseTime: '',
        starNum: 0,
        desc: ''
    };
    private formLabelWidth: string = '80px';

    /**
     * 获取列表数据
     */
    private getProductList(): void{
        apiProductList({}).then((res: any) => {
            this.products = res.data || []
        }).catch((error: object) => {
            console.error(error)
        })
    }

    /**
     * 新增记录
     */
    private addProduct(): void{
        apiProductAdd(this.form).then(() => {
            this.isVisibleForm = false;
            // 刷新列表
            this.getProductList();
        }).catch((error: object) => {
            console.error(error)
        })
    }

    mounted() {
        this.getProductList();
    }

}
</script>

