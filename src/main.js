// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '~/assets/app.scss'

export default function (Vue, { router, head, isClient }) {
    router.beforeEach((to, from, next) => {
        setTimeout(() => {
            console.log('finished waiting');
            next()
        }, 800)
    })
}
