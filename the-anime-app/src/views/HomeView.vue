<template>
  <h1>Hello World! ;-)</h1>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import gql from "graphql-tag";

    @Component({
        name: 'Home',
        components: {},
        apollo: {
            mediaList: {
                query: gql`{
                    Page(perPage: 20) {
                        media {
                            id 
                            title {
                                english
                            }
                            coverImage {
                                large
                                color
                            }
                        }
                    }
                }`,
                update(data) {
                    // console.log('Data: ', data);
                    return data.Page.media
                }
            }
    },
    data() {
        return {
            mediaList: []
        }
    }
    })
    export default class HomeView extends Vue {}
</script> 
