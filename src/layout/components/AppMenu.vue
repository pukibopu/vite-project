<template>
      <el-menu
        active-text-color="#ffd04b"
        background-color="#304156"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        router
      >
      <el-menu-item index="/">
          <el-icon><icon-menu /></el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-sub-menu index="1">
          <template #title>
            <el-icon><Location /></el-icon>
            <span>商品</span>
          </template>
            <el-menu-item index="/product/product_list"> <el-icon><Location /></el-icon>商品列表</el-menu-item>
            <el-menu-item index="/product/product_attr"> <el-icon><Location /></el-icon>商品规格</el-menu-item>
            <el-menu-item index="/product/product_reply"> <el-icon><Location /></el-icon>商品评论</el-menu-item>
            <el-menu-item index="/product/product_classify"> <el-icon><Location /></el-icon>商品分类</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
          <el-icon><Location /></el-icon>
          <span>订单</span>
          <el-menu-item index="/product/product_classify"> <el-icon><Location /></el-icon>订单列表</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="4">
          <el-icon><Setting /></el-icon>
          <span>媒体</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon><Location /></el-icon>
          <span>权限</span>
        </el-menu-item>
      </el-menu>
</template>
<script lang="ts" setup>
import {
  Menu as IconMenu,
  Location,
  Setting
} from '@element-plus/icons-vue'
</script>
