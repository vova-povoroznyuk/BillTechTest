<template>
  <div class="ticket">
    <div class="ticket-head">
      <p class="ticket-price">{{ ticket.price }} ₴</p>
      <div class="ticket-logo">
        <img src="~/assets/images/ticketLogo.svg" alt="ticket logo" />
      </div>
    </div>
    <div class="ticket-params" v-for="segment in ticket.segments">
      <div class="segment-info">
        <p class="param-label">
          {{ segment.origin }} – {{ segment.destination }}
        </p>
        <p class="param-value">{{ segment.timePeriod }}</p>
      </div>
      <div class="segment-info">
        <p class="param-label">Тривалість</p>
        <p class="param-value">{{ segment.travelTime }}</p>
      </div>
      <div class="segment-info">
        <p class="param-label">2 пересадки</p>
        <p class="param-value">{{ segment.stops.join() }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["ticket"]);
</script>

<style lang="scss" scoped>
.ticket {
  border-radius: 8px;
  padding: 26px 20px;
  box-shadow: 1px 0px 15px 0px rgba(74, 74, 74, 0.43);
}
.ticket-head {
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
}
.ticket-price {
  font-weight: 600;
  font-size: 24px;
  color: #2196f3;
}
.ticket-logo {
  max-width: 70px;
  img {
    width: 100%;
    display: block;
  }
}
.ticket-params {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.param-label {
  color: #a0b0b9;
  font-size: 18px;
  text-transform: uppercase;
  margin-bottom: 5px;
}
.param-value {
  color: #4a4a4a;
  font-size: 21px;
}
.segment-info {
  width: 33%;
}
</style>
