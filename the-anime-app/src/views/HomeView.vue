<script lang="ts">
    import { BRow, BCol, BSpinner } from "bootstrap-vue";
    import { Component, Vue } from "vue-property-decorator";
    import gql from "graphql-tag";
    import AnimeCard from '@/components/AnimeCard.vue';

    @Component({
        name: 'Home',
        components: {
            BRow, 
            BCol,
            AnimeCard,
            BSpinner
        },
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
                    // console.log('data.Page.media: ', data.Page.media);
                    return data.Page.media;
                }
            }
        },
        computed: {
            loading() {
                return this.$apollo.queries.mediaList.loading;
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

<template>
    <div>
        <div v-if="loading" class="d-flex justify-content-center">
            <b-spinner></b-spinner>
        </div>
        <b-row  v-else>
            <b-col v-for="(mediaItem, index) in mediaList" :key="index" cols="3">
                <anime-card :mediaItem="mediaItem"></anime-card>
            </b-col>
        </b-row>
    </div>
</template>