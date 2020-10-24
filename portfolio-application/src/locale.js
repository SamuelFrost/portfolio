class Locale{
  constructor(){
    this.locales = {}
  }
  add(locale_extention) {
    return this.locales = {
      ...this.locales,
      ...locale_extention
    }
  }
}
export const locale = new Locale;