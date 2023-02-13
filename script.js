//milestone 1
const app = Vue.createApp({

    data() { //metodo data

        return {
            tasks: [
                "ciao",
                "hello",
                "hi",
            ],

            newTask: ""
        }
    },

    methods: {

        addTask(){
            console.log(this.newTask);

            const newString = this.newTask;

            this.tasks.push(newString);
        },

        removeTask(i) {
            this.tasks.splice(i, 1);
        }
    }
});

app.mount("#root");
