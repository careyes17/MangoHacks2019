<template>
  <div @keydown.up="offset == 0 ? null: scrollUp()" @keydown.down="items.length >= 3 ? offset == items.length - 3 ? null: scrollDown(): null">
    <v-form ref="form" @submit="submit">
      <v-container>
        <v-layout align-end justify-center row wrap>
          <v-flex>
            <v-list two-line>
              <template v-bind="calculateOffset()" v-for="item in items.slice(offset, items.length < 3 ? items.length : offset + 3)">
                <v-list-tile-content :key="item">
                  <v-list-tile-sub-title v-html="item.user"></v-list-tile-sub-title>
                  <v-list-tile-title v-html="item.message">{{item.message}}</v-list-tile-title>
                </v-list-tile-content>
              </template>
            </v-list>
            <v-text-field
              label="Enter message"
              v-model="text1"
              type="text"
              block="false"
              @submit="submit" />
          </v-flex>
          <v-flex xs1 sm1 md1>
            <v-btn v-on:click="offset == 0 ? null: scrollUp()">&uarr;</v-btn>
            <v-btn v-on:click="items.length >= 3 ? offset == items.length - 3 ? null: scrollDown(): null">&darr;</v-btn>
            <v-btn v-on:click="!text1=='' ? addItems(text1):null">Submit</v-btn>
          </v-flex>
          <v-flex></v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

export default {
  name: 'MessageList',
  data () {
    return {
      text1: '',
      offset: 0,
      start: true,
      items: [
        {
          message: 'Hey grandma, how are you?',
          user: 'Greg'
        },
        {
          message: 'Doing well dear',
          user: "Greg's Grandma"
        }
      ]
    }
  },
  components: {
    Vue,
    Vuetify
  },
  methods: {
    calculateOffset () {
      if (this.items.length > 2) {
        this.offset = this.items.length - 3
      }
      this.start = false
    },
    addItems (item) {
      this.items.push({message: item, user: 'Greg'})
      if (this.items.length > 2) {
        this.offset = this.items.length - 3
      }
      this.text1 = ''
    },
    scrollUp () {
      this.offset--
    },
    scrollDown () {
      this.offset++
    },
    submit (e) {
      e.preventDefault()
      if (this.text1 !== '') {
        this.addItems(this.text1)
      }
    }
  }
}
</script>

<style scoped>

</style>
