class Locale{
  constructor(){
    this.locales = {}
    this.sections = {}
    this.active_locale = "en-us"
  }
  // active_locale(setting = this.setting){
  //   return setting | "en-us"
  // }
  add(locale_extention) {
    return this.locales = {
      ...this.locales,
      ...locale_extention
    }
  }
  add_section(locale_path){
    Object.assign(this.sections, {locale_path: true})
  }
}
export const locale = new Locale;