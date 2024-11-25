import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout } from '#/layouts';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      icon: 'lucide:layout-dashboard',
      order: -1,
      title: '用户权限',
    },
    name: 'Role',
    path: '/role',
    children: [
      {
        name: 'school',
        path: '/role/school',
        component: () => import('#/views/role/school.vue'),
        meta: {
          affixTab: false,
          icon: 'lucide:area-chart',
          title: '学校用户',
          authority: ['school'],
        },
      },
      {
        name: 'edu',
        path: '/role/edu',
        component: () => import('#/views/role/edu.vue'),
        meta: {
          icon: 'carbon:workspace',
          title: '教育用户',
          authority: ['edu'],
        },
      },
      {
        name: 'company',
        path: '/role/company',
        component: () => import('#/views/role/company.vue'),
        meta: {
          icon: 'carbon:workspace',
          title: '企业用户',
          authority: ['company'],
        },
      },
    ],
  },
];

export default routes;
