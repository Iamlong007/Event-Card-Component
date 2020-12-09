<template>
  <div id="app">
    <div class="w-11/12 mx-auto">
      <div
        class="mt-10 w-10/12 mx-auto mid:w-5/12 lg:w-3/12 bg-card bg-cover bg-no-repeat block beat"
      >
        <div class="w-10/12 pt-3 mx-auto flex flex-col">
          <div class="mt-2">
            <h1 class="text-xs w-12/12 text-left text-red-600 font-bold">
              {{ ticket }}
            </h1>
          </div>
          <div class="mt-10">
            <p class="ticket text-base text-gray-400 mt-4">{{ ticketId }}</p>
          </div>
          <div class="flex flex-row justify-between">
            <div class="mt-1 w-8/12 pb-6 flex flex-row justify-between">
              <div>
                <p class="ticket text-gray-400 font-light text-sm">
                  {{ name }}
                </p>
              </div>
              <div>
                <p class="ticket text-gray-400 text-xxs pt-1 md:pt-1">
                  {{ date }}
                </p>
              </div>
            </div>
            <div class="w-3/12 -mt-1">
              <img
                :src="eventImage"
                alt=""
                class="w-3/6 float-right rounded-md border border-gray-400"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        class="bg-white shadow-lg w-10/12 mid:w-5/12 lg:w-3/12 mx-auto -mt-8 p-4 rounded-md flex flex-col"
      >
        <div class="w-11/12 mx-auto flex flex-col pt-16">
          <div class="w-12/12">
            <img
              src="./assets/images/fi_check-circle.svg"
              alt=""
              class="mx-auto"
            />
          </div>
          <h2 class="text-center font text-lg font-quicksand pt-3 font-medium">
            Payment Successful
          </h2>
          <h3
            class="text-center text-sm font font-quicksand text-gray-700 pt-2 font-medium"
          >
            Please click next to preview other purchased tickets.
          </h3>
          <div class="w-12/12 mt-10 flex flex-row justify-between">
            <div>
              <button
                class="text-accent-variant font text-sm font-medium focus:outline-none"
              >
                Close
              </button>
            </div>
            <div class="w-5/12 flex flex-row justify-between">
              <button class="focus:outline-none opacity-50 pt-1">
                <img
                  src="./assets/images/chevron-right.svg"
                  alt=""
                  class="transform rotate-180"
                />
              </button>
              <div
                class="flex flex-row text-sm w-5/12 font-quicksand font-bold justify-between pl-2 pt-1 text-gray-700"
              >
                <p class="text-primary">1</p>
                <p>of</p>
                <p>4</p>
              </div>
              <button class="focus:outline-none pt-1 pl-2">
                <img
                  src="./assets/images/chevron-right.svg"
                  alt=""
                  class="transform"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ticket: "VIP",
      ticketId: "7t5y857h8h47",

      name: "Ozenua Tobi",
      date: "11/12",
      eventImage: require("./assets/images/event.png"),
    };
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.border {
  border: 4px solid red;
}
.ticket {
  font-family: Space Mono;
  font-style: normal;
  font-weight: lighter;

  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.3),
    -1px -1px 2px rgba(98, 98, 98, 0.5);
}
.font {
  font-family: Quicksand;
}
.beat {
  animation: heartbeat 1s infinite alternate;
  -webkit-animation: heartbeat 1s infinite alternate;
  -moz-animation: heartbeat 1s infinite alternate;
  -ms-animation: heartbeat 1s infinite alternate;
  -o-animation: heartbeat 1s infinite alternate;
}
@keyframes heartbeat {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.4);
  }
}

.fade-enter {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}
.slide-in-enter {
  opacity: 0;
  transform: translateY(-50px);
}
.slide-in-enter-active,
.slide-in-leave-active {
  transition: all 0.8s ease;
}

.slide-in-leave-to {
  opacity: 1;
  transform: translateY(-290px);
}
</style>
