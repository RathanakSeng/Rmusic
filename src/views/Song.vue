<template>
  <v-container grid-list-md>
    <v-layout wrap>
      <v-flex lg8 md12 sm12 xs12>
        <v-layout column>
          <v-flex xs12 sm12 md12 lg12>
              <r-iframe :src="src"/>
              <v-card-title primary-title>
                <div>
                  <div class="headline">Solo - Jennie</div>
                  <span class="grey--text">
                    <v-icon meduim>play_circle_outline</v-icon>
                    <span>·</span>
                    <span class="subheading mr-2" v-text="nLove"></span>
                  </span>
                </div>
                <v-spacer></v-spacer>
                <v-card-actions>
                  <div>
                    <v-btn small icon @click="loveAction">
                      <v-icon class="icon-amber">{{ love ? 'favorite' : 'favorite_outline' }}</v-icon>
                    </v-btn>
                    <span class="subheading grey--text" v-text="nLove"></span>
                    <span class="ml-4"></span>
                  </div>
                  <div class="hidden-lg-and-up">
                    <v-btn small icon @click="showComment = !showComment">
                      <v-icon class="icon-amber">chat_bubble_outline</v-icon>
                    </v-btn>
                    <span class="subheading grey--text" v-text="nComment"></span>
                    <span class="ml-4"></span>
                  </div>
                  <div>
                    <v-btn small icon @click="saveAction">
                      <v-icon class="icon-amber">{{ save ? 'bookmark' : 'bookmark_outline' }}</v-icon>
                    </v-btn>
                    <span class="subheading grey--text">{{ save ? 'saved' : 'save' }}</span>
                    <span class="ml-4"></span>
                  </div>
                  <div>
                    <v-btn small icon>
                      <v-icon class="icon-amber">more_horiz</v-icon>
                    </v-btn>
                    <span class="ml-4"></span>
                  </div>
                </v-card-actions>
              </v-card-title>
              <channel-info />
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex lg4 md12 sm12 xs12 v-bind:class="{'hidden-md-and-down': !showComment}">
        <div>
          <v-layout column>
            <v-subheader>
              <v-icon class="icon-amber hidden-md-and-down">chat_bubble_outline</v-icon>
              <span class="ma-1 hidden-md-and-down"></span>
              <b>Comments</b>
              <span class="ma-1"> · </span>
              <b>{{nLove}}</b>
            </v-subheader>
          </v-layout>
          <v-container
            id="scroll-target"
            style="max-height: 425px"
            class="scroll-y grey lighten-3"
            >
            <template v-for="item in items">
              <div :key="item.title">
                <v-list-tile
                  avatar
                  >
                  <v-list-tile-avatar>
                    <img :src="item.avatar">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title v-html="item.title"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-divider></v-divider>
              </div>
            </template>
          </v-container>
          <v-form>
            <v-container fluid>
              <v-layout>
                <v-flex>
                  <v-text-field
                    outline
                    label="your comment"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex>
                  <v-btn class="primary" dark flat>send</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </div>
      </v-flex>
      <v-flex lg12 md12 sm12 xs12>
        <v-divider></v-divider>
        <v-subheader><b>Recommended</b></v-subheader>
        <v-layout wrap>
          <v-flex lg3 md3 sm6 xs12 v-for='song in songs' :key='song.title'>
            <song-card :img='song.imgUrl' :title='song.title' :artist='song.artist' route='Song'/>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SongCard from '../components/reusable/SongCard'
import RIframe from '../components/reusable/RIframe'
import ChannelInfo from '../components/reusable/ChannelInfo'
export default {
  data () {
    return {
      src: 'https://www.youtube.com/embed/b73BI9eUkjM',
      love: false,
      save: false,
      nLove: 256,
      nComment: 25,
      showComment: false,
      show: false,
      songs: [
        {
          title: 'Solo',
          artist: 'Jennie',
          imgUrl: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'
        },
        {
          title: 'Boombayah',
          artist: 'Blackpink',
          imgUrl: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'
        },
        {
          title: 'Stay',
          artist: 'Blackpink',
          imgUrl: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'
        },
        {
          title: 'Solo',
          artist: 'Jennie',
          imgUrl: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'
        },
        {
          title: 'Boombayah',
          artist: 'Blackpink',
          imgUrl: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'
        },
        {
          title: 'Stay',
          artist: 'Blackpink',
          imgUrl: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'
        }
      ],
      items: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        }
      ]
    }
  },
  components: {
    SongCard,
    RIframe,
    ChannelInfo
  },
  methods: {
    loveAction () {
      this.love = !this.love
      if (this.love) {
        this.nLove++
      } else {
        this.nLove--
      }
    },
    saveAction () {
      this.save = !this.save
    }
  }
}
</script>

<style>
i.icon-amber {
  color: #ffa21a !important
}
</style>
