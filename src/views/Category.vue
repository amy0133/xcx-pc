<template lang="pug">
  .category
    h1 产品类型管理
    el-table(:data="categorys", border)
      el-table-column(prop="code", label="code")
      el-table-column(prop="name", label="名称")
      el-table-column(prop="desc", label="描述")
      el-table-column(label="操作")
        template(slot-scope="scope")
          el-button(size="small") 编辑{{scope.id}}
</template>

<script lang="ts">
  import { Component, Vue, Provide } from 'vue-property-decorator'

  @Component({})
  export default class Category extends Vue {
    private categorys: object = [];

  }
</script>

<style lang="scss" scoped>

</style>
