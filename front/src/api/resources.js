import Vue from 'vue';
import VueResource from 'vue-resource';

import {API_ROOT} from '../config';
import router from '../router';

Vue.use(VueResource);
vue.http.options.root = API_ROOT;

// export const
