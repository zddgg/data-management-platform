<template>
  <a-breadcrumb class="container-breadcrumb">
    <a-breadcrumb-item>
      <icon-apps />
    </a-breadcrumb-item>
    <a-breadcrumb-item v-for="item in locales" :key="item">
      {{ $t(item) }}
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script lang="ts" setup>
import {PropType, ref, Ref} from 'vue';
import {RouteRecordRaw, useRoute} from "vue-router";
import {appRoutes} from "@/router/routes";

  defineProps({
    items: {
      type: Array as PropType<string[]>,
      default() {
        return [];
      },
    },
  });

  const route = useRoute();

  const locales: Ref<(string | undefined)[]> = ref([]);

  const findRouteByPath = (
      routes: RouteRecordRaw[] | undefined,
      p1: string
  ) => {
    return routes?.find((value) => value.path === p1);
  };

  const resolveLocalesByPath = (path: string) => {
    const routeNames = path.split('/').filter((name) => name !== '');
    const resArr: (string | undefined)[] = [];

    let raw: RouteRecordRaw[] | undefined;
    routeNames.forEach((routeName, index) => {
      const currentRoute =
          index === 0
              ? appRoutes.find(({ name }) => name === routeName)
              : findRouteByPath(raw, routeName);
      resArr.push(currentRoute?.meta?.locale);
      raw = currentRoute?.children;
    });

    locales.value = resArr;
  };

  resolveLocalesByPath(route.fullPath);
</script>

<style scoped lang="less">
  .container-breadcrumb {
    margin: 16px 0;
    :deep(.arco-breadcrumb-item) {
      color: rgb(var(--gray-6));
      &:last-child {
        color: rgb(var(--gray-8));
      }
    }
  }
</style>
