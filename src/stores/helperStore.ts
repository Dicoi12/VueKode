import { defineStore } from 'pinia'

export const useHelperStore = defineStore('helper-store', {
    state: (): {
      scroll?:number;
      } => {
        return {
         scroll:0   
        }
      },
      actions:{

      }
})