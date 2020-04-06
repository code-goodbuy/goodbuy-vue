<template>
<div class="feature-content">
  <div @click="onClickFridgeKarma" class="feature-button">
    <KarmaFridgeIcon class="icon" />
    <div>
      <br>
      <b>Karma Fridge</b>
    </div>
    <div>Scan all items in your fridge and get a Karma score</div>
  </div>
  <div @click="onClickInstantFeedback" class="feature-button">
    <InstantIcon class="icon" />
    <div class="">
      <br>
      <b>Instant Feedback</b>
    </div>
    <div>Scan a single item and get a feedback</div>
  </div>
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
        params: {
          usersFirstVisit: true
        },
      })
    },
    onClickFridgeKarma() {
      this.$router.push({
        name: 'fridge-karma',
        params: {
          usersFirstVisit: true
        },
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

div.feature-button {
  padding: 0;
  border: 0;
  text-align: center;
  padding: 6vw;
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

div {
  align-items: center;
}

</style>
