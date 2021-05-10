// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '~/assets/app.scss'
import 'prismjs/themes/prism.css';
import VueGtag from "vue-gtag";

export default function (Vue, { router, head, isClient, isServer }) {
    if(isClient){
        Vue.use(VueGtag, {
                config: { id: process.env.GRIDSOME_GOOGLE_ANALYTICS_ID},
            },
            router
        );
    }
}
