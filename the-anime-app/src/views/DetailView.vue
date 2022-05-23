<script>
    import { BRow, BCol, BImg, BSpinner } from "bootstrap-vue";
    import gql from "graphql-tag";

    export default {
        name:       'DetailView',
        components: {
            BRow,
            BCol,
            BImg,
            BSpinner
        },
        apollo: {
            media: {
                query: gql`
                query fetchMedia($id: Int) {
                    Media(id: $id) {
                        title {
                            english
                        }
                        description
                        format
                        status
                        episodes
                        bannerImage
                        coverImage {
                            large
                            color
                        }
                        popularity
                        averageScore
                        favourites
                    }
                }`,
                variables() {
                    return {
                        id: this.$route.params.id
                    }
                },
                update(data) {
                    console.log('data: ', data);
                    return data.Media;
                }
            }
        },
        computed: {
            episodeDate() {
                return this.media?.episodes || 'N/A';
            },
            loading() {
                return this.$apollo.queries.media.loading;
            }
        },
        data() {
            return {
                media: null
            }
        },
        mounted() {
            // console.log(this.$route.params.id);
        }
    }
</script>

<template>
    <div>
        <div v-if="loading" class="d-flex justify-content-center">
            <b-spinner></b-spinner>
        </div>
        <div v-else>
            <h1>Detail View</h1>
            <b-row>
                <b-col class="mb-5">
                    <b-img :src="media.bannerImage" fluid></b-img>
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="4">
                    <b-img :src="media.coverImage.large"></b-img>
                </b-col>
                <b-col cols="8">
                    <h1>{{ media.title.english }}</h1>
                    <p>{{ media.description }}</p>
                </b-col>
            </b-row>

            <b-row class="large-margin-bottom">
                <b-col cols="3">
                    <div class="data-box p-3">
                        <h4>Popularity</h4>
                        <span>{{ media.popularity }}</span>
                    </div>
                </b-col>
                <b-col cols="3">
                    <div class="data-box p-3">
                        <h4>Favourites</h4>
                        <span>{{ media.favourites }}</span>
                    </div>
                </b-col>
                <b-col cols="3">
                    <div class="data-box p-3">
                        <h4>Episodes</h4>
                        <span>{{ episodeDate }}</span>                    
                    </div>
                </b-col>
                <b-col cols="3">
                    <div class="data-box p-3">
                        <h4>Average Score</h4>
                        <span>{{ media.averageScore }}</span>
                    </div>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<style scoped>
.data-box {
    background-color: lightgray;
}
.large-margin-bottom {
    margin-bottom: 500px;
    margin-top: 20px;
}
</style>