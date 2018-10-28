import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '../../node_modules/vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#00923f',
    secondary: '#055d15',
    accent: '#f8c300',
    error: '#ff0000',
    info: '#0097f9',
    success: '#008223',
    warning: '#e2be00'
  }
})
