import Vue from 'vue';
import Router from 'vue-router';
import Install from './views/install.vue';
import BaseRoute from './views/base-route.vue';
import Form from './views/form.vue';
import Table from './views/table.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'install',
			component: Install,
			meta: {
				index: 'TD',
				title: 'Install',
				icon: 'mdi-view-dashboard'
			}
		},
		{
			path: '/Components',
			name: 'components',
			component: BaseRoute,
			meta: {
				index: 'C',
				title: 'Components',
				icon: 'mdi-lock'
			},
			children: [
				{
					path: 'Form',
					name: 'form',
					component: Form,
					meta: {
						index: 'C-1',
						title: 'Form',
						hasChildren: true
					},
					children: [
						{
							path: 'Switch',
							name: 'switch',
							parent: 'form',
							meta: {
								index: 'C-F-1',
								title: 'Switch'
							}
						}
					]
				},
				{
					path: 'Table',
					name: 'table',
					component: Table,
					meta: {
						index: 'C-2',
						title: 'Table'
					}
				}
			]
		}
	]
});
