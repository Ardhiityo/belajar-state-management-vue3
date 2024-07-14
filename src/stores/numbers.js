import {
    defineStore
} from "pinia";

export const useNumbers = defineStore('numbers', {
    state: () => {
        return {
            number: [10, 11, 12, 13, 14, 15]
        }
    }
});