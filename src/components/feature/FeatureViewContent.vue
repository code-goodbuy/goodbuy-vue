<template>
    <div class="feature-content">
            <button 
            @click="onClickFridgeKarma"
            class="karma-fridge-button" 
            >
            <KarmaFridgeIcon class="icon"/>
            <p>Karma Fridge let's you scan the item in your fridge and provides you with an ethical-feedback.</p>
            </button>
            <button
            @click="onClickInstantFeedback"
            >
            <InstantIcon class="icon"/>
             <p>Instant Feedback let's you scan single items and give you feedback and additional information about that product.</p>
            </button>
    </div>
</template>

<script>
import InstantIcon from '@/assets/common/InstantIcon'
import KarmaFridgeIcon from '@/assets/common/KarmaFridgeIcon'

export default {
    components: {
        InstantIcon,
        KarmaFridgeIcon,
    },
    methods: {
        onClickInstantFeedback() {
            this.$router.push({
                name: 'instant-feedback',
                params: { usersFirstVisit: true },
            })
        },
        onClickFridgeKarma() {
            this.$router.push({
                name:'fridge-karma',
                params: { usersFirstVisit: true },
            })
        }
    }
}
</script>

<style scoped>
    .icon {
        width: 125px;
        height: 125px;
    }

    p {
        /* goodbuy/Body Mid */

        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 20px;

        /* goodbuy/Black */

        color: #272727;

        padding: 1rem;
    }
    .feature-content {
        margin-top: 2rem;
    }
</style>
