//milestone 1
const app = Vue.createApp({

    data() { //metodo data

        return {
            tasks: [
                {
                    title: "ciao",
                    todo: true
                },
                {
                    title: "hi",
                    todo: true
                },
                {
                    title: "hello",
                    todo: true
                }
                
            ],

            newTask: [
                {
                    title: "",
                    todo: true
                },
            ]
        }
    },

    methods: {

        addTask(){
            console.log(this.newTask);

            const newString = this.newTask.title;

            this.tasks.push(newString);
        },

        removeTask(i) {
            this.tasks.splice(i, 1);
        }
    }
});

app.mount("#root");
