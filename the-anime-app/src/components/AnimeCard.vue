<template>
    <div>
        <b-card 
            :title="animeTitle" 
            :img-src="mediaItem.coverImage.large" 
            :img-alt="animeTitle"
            img-top 
            img-height="265"
            img-width="185"
            class="mb-5"
            >
            <b-button :to="`/anime/${mediaItem.id}`" variant="primary">View</b-button>
        </b-card>
        
    </div>
</template>

<script  lang="ts">
    import { BCard, BButton } from "bootstrap-vue";

    export default {
        components: {
            BCard,
            BButton
        },
        props: {
            mediaItem: {
                type: Object,
                required: true
            }
        },
        computed: {
            animeTitle(): string {
                let result = '';
                    result = this.mediaItem?.title?.english || 'Title not found';
                return result;
            }
        }
    }
</script>

<style></style>