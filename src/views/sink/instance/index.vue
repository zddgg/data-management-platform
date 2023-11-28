<template>
  <div>
    <right-tree
        v-if="list && list.length"
        :list="list"
        :showfields="showFields"
    ></right-tree>
  </div>
</template>
<script>
import RightTree from './RightTree.vue'

export default {
  components: {
    RightTree,
  },
  data() {
    return {
      list: {
        "id": "af6d63f4-e578-4f50-8f4b-6af131643928",
        "httpStatus": 500,
        "requestUri": "GET /test/test7",
        "serviceName": "example1-rpc",
        "spanId": "b866ca54-6d04-4d96-a4ce-34b81cff6227",
        "startTimeStr": "2021-05-18 16:02:32",
        "children": [
          {
            "id": "da1237bb-2872-48cd-a9a0-8e3360d54deb",
            "httpStatus": 200,
            "parentSpanId": "b866ca54-6d04-4d96-a4ce-34b81cff6227",
            "requestUri": "GET /test1/log1",
            "serviceName": "example2-rpc",
            "spanId": "393ac51a-1727-4387-942e-02b0725e92e2",
            "startTimeStr": "2021-05-18 16:02:33",
            "children": []
          },
          {
            "id": "bc07ed9f-8ae8-41bb-9ebc-1cbaa9288d16",
            "httpStatus": 200,
            "parentSpanId": "b866ca54-6d04-4d96-a4ce-34b81cff6227",
            "requestUri": "POST /test1/log1",
            "serviceName": "example3-rpc",
            "spanId": "62139e07-c265-4764-b5b6-dab5add43994",
            "startTimeStr": "2021-05-18 16:02:33",
            "children": [
              {
                "id": "05d4b2e4-535e-4781-878b-79d748e03cf5",
                "httpStatus": 200,
                "parentSpanId": "62139e07-c265-4764-b5b6-dab5add43994",
                "requestUri": "GET /test1/log1",
                "serviceName": "example2-rpc",
                "spanId": "e1697e06-810a-42e8-850c-219449d9f04a",
                "startTimeStr": "2021-05-18 16:02:35",
                "children": []
              }
            ]
          }
        ]
      },
      showFields: [
        {
          name: '单元：',
          key: 'spanId',
          color: '#1890ff',
        },
        {
          name: '服务：',
          key: 'serviceName',
          color: '#1890ff',
        },
        {
          name: 'URL：',
          key: 'requestUri',
          color: '#409eff',
        },
        {
          name: '状态：',
          key: 'httpStatus',
          colorEvent: e => this.changeColor(e),
        },

        {
          name: '时间：',
          key: 'startTimeStr',
          color: '#1890ff',
        },
      ],
    }
  },
  methods: {
    changeColor(status) {
      console.log(status)
      if (status === 200) {
        return '#52c41a'
      } else {
        return '#f5222d'
      }
    },
  },

}
</script>