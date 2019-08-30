import Vue from 'vue'
import Router from 'vue-router'
import data1 from './router1'
import data2 from './router2'
import data3 from './router3'
import api from '@/api/index';
import isgo from '@/utils/isgo'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
			path: '/',
			redirect: '/login'
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('../views/Login/Login.vue')
		},
		{
			path: '/home',
			name: 'home',
			component: () => import('../views/Home/Home.vue'),
			children: [...data1,...data2,...data3,
					//编辑试题
					{
						path: 'main-editQuestions/:id',
						name: 'main-editQuestions',
        				beforeEnter: isgo,
						type: '',
						component: () => import('@/views/Test/Edit_test/Edit_test')
					},
					//试题详情
					{
						path: 'main-questionsDetail/:id',
						name: 'main-questionsDetail',
        				beforeEnter: isgo,
						type: '',
						component: () => import('@/views/Test/Test_details/Test_details')
					},
					//添加菜单
					{
						path: 'main-menu',
						name: 'main-menu',
        				beforeEnter: isgo,
						type: '',
						component: () => import('@/views/Home/Add_menu/Add_menu')
					},
					//创建试卷
					{
						path: 'main-examEdit',
						name: 'main-examEdit',
        				beforeEnter: isgo,
						type: '',
						component: () => import('@/views/Home/Add_menu/Add_menu')
					},
					//阅卷
					{
						path: 'main-examinationPapers',
						name: 'main-examinationPapers',
        				beforeEnter: isgo,
						type: '',
						component: () => import('@/views/Exam/Read_exam/Read_exam')
					},
					//批卷班级
					{
						path: 'main-examPaperClassList',
						name: 'main-examPaperClassList',
        				beforeEnter: isgo,
						type: '',
						component: () => import('@/views/Exam/Read_exam/Read_exam')
					},
					//待批试卷
					{
						path: 'main-examPaperClassmate',
						name: 'main-examPaperClassmate',
        				beforeEnter: isgo,
						type: '',
						component: () => import('@/views/Test/Paper_test/Paper_test')
					}
				],
			beforeEnter(to,from,next){
				let sess = window.sessionStorage.getItem('authorization');
				if(!sess){
					next('/login')
				}
				else{
					api.userinfo().then(res=>{
						window.sessionStorage.setItem('userinfo',JSON.stringify(res.data));
					})
					next();
				}
			}
		}
	]
})