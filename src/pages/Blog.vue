<template>
    <Layout>
        <h1>Blog</h1>
        <p>This is where I drop my random thoughts derived from my everyday experiences</p>

        <div class="content">
                <div v-for="edge in $page.posts.edges" :key="edge.node.id">
                    <h2><a href="article">{{ edge.node.title }}</a></h2>
                </div>
        </div>

    </Layout>
</template>

<page-query>
    query {
        posts: allPost {
        edges {
        node {
        id
        title
    }
    }
    }
    }
</page-query>

<script>
    export default {
        metaInfo: {
            title: 'About us'
        }
    }
</script>
