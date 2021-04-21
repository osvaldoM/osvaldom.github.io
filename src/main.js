// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '~/assets/app.scss'
import 'prismjs/themes/prism.css';
import {isSmallScreen} from "./util/Util";

const isMobileScreen = isSmallScreen();
let isInitialNavigation = true;
export default function (Vue, { router, head, isClient }) {
    router.beforeEach((to, from, next) => {
        if(isInitialNavigation) {
            isInitialNavigation = false;
            return next();
        }

        setTimeout(() => {
            next()
        }, isMobileScreen? 600 : 300 );
    })
}
