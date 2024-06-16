import Index from "../pages/Index.vue";
import CategoryPage from "../pages/CategoryPage.vue";
import CartPage from "../pages/CartPage.vue";
import UserPage from "../pages/user/UserPage.vue";
import UserInfoPage from "../pages/user/UserInfoPage.vue";
import SearchPage from "../pages/SearchPage.vue";
import UserSettingPage from "../pages/user/UserSettingPage.vue";
import UserRegisterPage from "../pages/user/UserRegisterPage.vue";

// 定义一些路由
const routes = [
  { path: '/', component: Index },
  { path: '/category', component: CategoryPage },
  { path: '/cart', component: CartPage },
  { path: '/user', component: UserPage },
  { path: '/user/register', component: UserRegisterPage },
  { path: '/user/info', component: UserInfoPage },
  { path: '/user/setting', component: UserSettingPage },
  { path: '/search', component: SearchPage },
]

export default routes;