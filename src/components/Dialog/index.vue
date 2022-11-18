<template>
  <div class="dialog">
    <div class="header">
      <span>头部标签</span>
      <span>X</span>
    </div>
    <div class="content">
      <span>我是dialog内容区域aaaaaaaaaaaaaaaaaaaaa书上说宿舍叔叔叔叔kkkkkk和挥霍aaaaaaaaaaaaaaasssssssaaaaaaaaaaa</span>
    </div>
    <div class="footer">
      <el-button type="primary">确定</el-button>
      <el-button type="danger">取消</el-button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.dialog {
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 1px red solid;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;

  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .content {
    border-bottom: 1px red solid;
    border-top: 1px red solid;
    min-height: 300px;
    text-align: left;
  }

  .footer {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
