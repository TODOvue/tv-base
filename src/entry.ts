import type { App, Plugin } from 'vue'
import _TvCHANGE from './components/TvCHANGE.vue'
import './style.scss'

const TvCHANGE = _TvCHANGE as typeof _TvCHANGE & Plugin;
TvCHANGE.install = (app: App) => {
  app.component('TvCHANGE', TvCHANGE)
};

export { TvCHANGE }

export const TvCHANGEPlugin: Plugin = {
  install: TvCHANGE.install
};
export default TvCHANGE;

declare module 'vue' {
  export interface GlobalComponents {
    TvCHANGE: typeof TvCHANGE;
  }
}
