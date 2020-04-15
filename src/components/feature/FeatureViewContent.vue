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
import InstantIcon from '@/assets/common/InstantIcon.vue'
import KarmaFridgeIcon from '@/assets/common/KarmaFridgeIcon.vue'

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

<style lang="scss" scoped>

.feature-content {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
}

div.feature-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 6vw;
  color: #272727;
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  align-items: center;
  flex: 1;

  .icon {
    display: flex;
    justify-content: center;
    width: 35vw;
    height: 35vw;
  }
}

.feature-content {
  margin-top: 2rem;
}

</style>
