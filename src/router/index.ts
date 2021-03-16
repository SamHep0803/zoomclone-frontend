import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
	{
		path: "/login",
		name: "Login",
		component: Login,
	},
	{
		path: "/register",
		name: "Register",
		component: Register,
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
