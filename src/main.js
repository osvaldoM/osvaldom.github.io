// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '~/assets/app.scss'
import 'prismjs/themes/prism.css';
import {isSmallScreen} from "./util/Util";
import VueGtag from "vue-gtag";

const isMobileScreen = (process.isClient && isSmallScreen());
let isInitialNavigation = true; // TODO: replace with (from === router.START_LOCATION) once there is a new release of vue-router
export default function (Vue, { router, head, isClient, isServer }) {
    if(isClient){
        Vue.use(VueGtag, {
                config: { id: process.env.GRIDSOME_GOOGLE_ANALYTICS_ID},
            },
            router
        );
    }
    router.beforeEach((to, from, next) => {
        if(isInitialNavigation || isServer) {
            isInitialNavigation = false;
            return next();
        }
        setTimeout(() => {
            next()
        }, (isMobileScreen)? 600 : 300 ); //wait until navigation animation is complete
    });
}
