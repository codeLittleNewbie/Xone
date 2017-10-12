<template>
  <div id="xoNavPath">
    <!--<div class="xo-breadcrumb">
      <span class="el-breadcrumb__item">
        <span class="el-breadcrumb__item__inner">支付管理</span>
        <span class="xo-breadcrumb__separator">/</span>
      </span>
      <span class="el-breadcrumb__item">
        <span class="el-breadcrumb__item__inner">账户列表</span>
        <span class="el-breadcrumb__separator">/</span>
      </span>
    </div>-->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<style lang="less">
  .xo-breadcrumb {
    font-size: 15px;
    .xo-breadcrumb__separator {
      margin: 0 8px 0 0;
    }
  }
</style>
