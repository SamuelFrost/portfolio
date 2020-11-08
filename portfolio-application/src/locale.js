import {translateConfig, registerTranslateConfig, use} from 'lit-translate'


class LocaleConfig{
  initialize(){
    if (translateConfig.loader.length === 0){
      registerTranslateConfig({
        // loader: lang => fetch(`/src/locales/${lang}/application.json`).then(res => res.json())
        loader: lang => import(`./locales/${lang}/application.json`)
      });
    }
    if(translateConfig.lang === undefined){
      translateConfig.lang = "en-us";
      use("en-us");
    }
  }
}
export const localeConfig = new LocaleConfig

// class Locale{
//   constructor(){
//     this.locales = {}
//     this.sections = {}
//     this.active_locale = "en-us"
//   }
//   // active_locale(setting = this.setting){
//   //   return setting | "en-us"
//   // }
//   add(locale_extention) {
//     return this.locales = {
//       ...this.locales,
//       ...locale_extention
//     }
//   }
//   add_section(locale_path){
//     Object.assign(this.sections, {locale_path: true})
//   }
// }
// export const locale = new Locale;