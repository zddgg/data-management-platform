import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const LIST: AppRouteRecordRaw = {
    path: '/sink',
    name: 'sink',
    component: DEFAULT_LAYOUT,
    meta: {
        locale: '数据推送',
        requiresAuth: true,
        icon: 'icon-list',
        order: 3,
    },
    children: [
        {
            path: 'sink-config', // The midline path complies with SEO specifications
            name: 'SinkConfig',
            component: () => import('@/views/sink/config/index.vue'),
            meta: {
                locale: '任务配置',
                requiresAuth: true,
                roles: ['*'],
            },
        },
        {
            path: 'sink-config/create', // The midline path complies with SEO specifications
            name: 'SinkConfigCreate',
            component: () => import('@/views/sink/config/components/config-create.vue'),
            meta: {
                requiresAuth: true,
                roles: ['*'],
                hideInMenu: true
            },
        },
        {
            path: 'sink-instance', // The midline path complies with SEO specifications
            name: 'SinkInstance',
            component: () => import('@/views/sink/instance/index.vue'),
            meta: {
                locale: '任务实例',
                requiresAuth: true,
                roles: ['*'],
            },
        },
    ],
};

export default LIST;
