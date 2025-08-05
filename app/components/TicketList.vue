<template>
  <div class="ticket-list">
    <TicketListHead
      class="list-head"
      v-model:selectedSortType="selectedSortType"
    />
    <TicketView
      v-for="ticket in visibleList"
      class="ticket-item"
      :ticket="ticket"
    />
    <button class="paginate-btn" @click="addNextTicket">
      Завантажити ще 5 квитків
    </button>
  </div>
</template>

<script setup>
import {
  formatTimeRange,
  formatDuration,
} from "~/components/utils/dateHelpers";
const selectedSortType = ref("найдешевший");
const ticketList = reactive({ list: [] });
const { filters } = defineProps(["filters"]);
const activeFilters = computed(() => {
  const filterType = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
  };
  return Object.entries(filters)
    .filter((el) => el[1])
    .map((el) => filterType[el[0]]);
});
const filteredList = computed(() => {
  const arr = activeFilters.value.length
    ? ticketList.list.filter((el) => {
        const stops = el.segments.map((el) => el.stops.length);
        return (
          activeFilters.value.includes(stops[0]) &&
          activeFilters.value.includes(stops[1])
        );
      })
    : ticketList.list;
  return arr;
});
const sortedList = computed(() => {
  switch (selectedSortType.value) {
    case "найдешевший":
      return [...filteredList.value].sort((a, b) => a.price - b.price);
    case "найшвидший":
      return [...filteredList.value].sort((a, b) => {
        return (
          a.segments[0].duration +
          a.segments[1].duration -
          (b.segments[0].duration + b.segments[1].duration)
        );
      });
    default:
      return filteredList.value;
  }
});

const pages = ref(1);
const visibleList = computed(() => {
  const list = sortedList.value.slice(0, pages.value * 5);
  list.map((el) => {
    el.segments.map((segment) => {
      segment.timePeriod = formatTimeRange(segment);
      segment.travelTime = formatDuration(segment.duration);
      return el;
    });
    return el;
  });
  return list;
});
const getTickets = async () => {
  let stop = false;
  try {
    const searchResp = await $fetch("https://avs-backend.vercel.app/search");
    const ticketResp = await $fetch(
      `https://avs-backend.vercel.app/tickets?searchId=${searchResp.searchId}`
    );
    ticketList.list = ticketList.list.concat(ticketResp.tickets);
    stop = ticketResp.stop;
  } catch (error) {}
  return stop;
};

(async () => {
  let index = 0;
  while (index < 1) {
    index++;
    const stop = await getTickets();
    if (stop) break;
  }
})();
const addNextTicket = () => pages.value++;
</script>
<style lang="scss" scoped>
.ticket-list {
  width: 100%;
}
.ticket-item {
  margin-bottom: 20px;
}
.list-head {
  margin-bottom: 20px;
}
.paginate-btn {
  background-color: #2196f3;
  border-radius: 8px;
  border: none;
  color: #ffffff;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 500;
  padding: 15px 20px;
  width: 100%;
  cursor: pointer;
}
</style>
