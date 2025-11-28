
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: '@todovue/tv-CHANGE',
    configKey: 'tvCHANGE'
  },
  setup(_options, nuxt) {
    const cssPath = '@todovue/tv-CHANGE/style.css';
    if (!nuxt.options.css.includes(cssPath)) {
      nuxt.options.css.push(cssPath);
    }
  }
})
