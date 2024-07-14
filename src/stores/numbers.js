import {
    defineStore
} from "pinia";

export const useNumbers = defineStore('numbers', {
    state: () => {
        return {
            number: [10, 11, 12, 13, 14, 15]
        }
    },
    actions: {
        addNumber: function () {
            return this.number.push(this.number.length + 1);
        }
    },
    getters: {
        getNumbers: function (state) {
            return minNum => state.number.filter(num => num > minNum);
        }
    }
});