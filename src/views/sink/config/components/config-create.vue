<template>
  <div class="container">
    <a-form ref="formRef" :model="formData"
            :label-col-props="{ span: 6 }"
            :wrapper-col-props="{ span: 18 }">
      <a-row :gutter="80" style="margin-bottom: 20px">
        <a-col :span="8">
          <div style="text-align: center">数据来源</div>
        </a-col>
        <a-col :span="8">
          <div style="text-align: center">任务参数</div>
        </a-col>
        <a-col :span="8">
          <div style="text-align: center">数据去向</div>
        </a-col>
      </a-row>
      <a-space direction="vertical" :size="16">
        <a-card class="general-card" title="数据源配置">
          <a-row :gutter="80">
            <a-col :span="8">
              <a-form-item label="数据源类型">
                <a-select allow-clear>
                  <a-option>MaxCompute</a-option>
                </a-select>
              </a-form-item>
              <a-form-item label="数据源">
                <a-select allow-clear>
                  <a-option>pinf_idp_ods_uat</a-option>
                  <a-option>pinf_idp_refine_uat</a-option>
                </a-select>
              </a-form-item>
              <a-form-item label="表名">
                <a-input/>
                <a-button>查询</a-button>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <a-form-item label="DistinctId字段">
                <a-input/>
              </a-form-item>
              <a-form-item label="EventTime字段">
                <a-input/>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <a-form-item label="数据源类型">
                <a-select allow-clear>
                  <a-option>神策SDK</a-option>
                  <a-option>神策HDFS</a-option>
                </a-select>
              </a-form-item>
              <a-form-item label="数据源">
                <a-select allow-clear>
                  <a-option>PINF-SIT</a-option>
                  <a-option>PINF-UAT</a-option>
                  <a-option>PINF-PROD</a-option>
                </a-select>
              </a-form-item>
              <a-form-item label="数据类型">
                <a-radio-group>
                  <a-radio>事件</a-radio>
                  <a-radio>用户属性</a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item label="事件名">
                <a-input/>
              </a-form-item>
            </a-col>
          </a-row>
        </a-card>
        <a-card class="general-card" title="字段映射">
          <a-row :gutter="80">
            <a-col :span="10">
              <a-table :columns="columns" :data="data"/>
            </a-col>
            <a-col :span="4"></a-col>
            <a-col :span="10">
              <a-table :columns="columns" :data="data"/>
            </a-col>
          </a-row>
        </a-card>
        <a-card class="general-card" :bordered="false">
          <template #title>
            {{ $t('groupForm.title.description') }}
          </template>
          <a-form-item
              :label="$t('groupForm.form.label.parameterDescription')"
              field="audio.approvers"
          >
            <a-textarea
                :placeholder="$t('groupForm.placeholder.description')"
            />
          </a-form-item>
        </a-card>
      </a-space>
      <div class="actions">
        <a-space>
          <a-button>
            {{ $t('groupForm.reset') }}
          </a-button>
          <a-button type="primary">
            {{ $t('groupForm.submit') }}
          </a-button>
        </a-space>
      </div>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
import {reactive, ref} from 'vue';
import {FormInstance} from '@arco-design/web-vue/es/form';

const formData = ref({});
const formRef = ref<FormInstance>();

const columns = [
  {
    title: '字段名',
    dataIndex: 'column_name',
  },
  {
    title: '字段类型',
    dataIndex: 'column_type',
  },
];
const data = [{
  column_name: 'id',
  column_type: 'string'
}, {
  column_name: 'test1',
  column_type: 'string'
}, {
  column_name: 'test2',
  column_type: 'string'
}, {
  column_name: 'test3',
  column_type: 'string'
}, {
  column_name: 'test4',
  column_type: 'datetime'
}];
</script>

<script lang="ts">
export default {
  name: 'Group',
};
</script>

<style scoped lang="less">
.container {
  padding: 20px;
  overflow: hidden;
}

.actions {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 60px;
  padding: 14px 20px 14px 0;
  background: var(--color-bg-2);
  text-align: right;
}
</style>
