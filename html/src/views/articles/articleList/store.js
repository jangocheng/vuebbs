"use strict";
import articleList from "./modules";
import index_header from "../../../compoment/header_footer/index_header/modules";
import Vuex from "vuex";
import Vue from "vue";

import * as actionsList from "./action";
import * as actionHeader from "../../../compoment/header_footer/index_header/action";

Vue.use(Vuex);

let actions = Object.assign({}, actionsList, actionHeader);


export default new Vuex.Store({
    actions,
    modules: {
        articleList,
        index_header
    },
    getters:{

    }
});