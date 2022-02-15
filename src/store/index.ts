import Vuex from 'vuex';
import Trans from '@/store/modules/trans';
import Login from '@/store/modules/login';

export default new Vuex.Store({
    modules: {
        Trans,
        Login
    }
})
