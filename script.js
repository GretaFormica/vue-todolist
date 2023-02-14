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
                    title: ""
                },
            ]
        }
    },

    methods: {

        addTask(){
            console.log(this.newTask.title);

            const newString = this.newTask.title;

            this.tasks.push({
                title: newString,
                todo: true
            });
        },

        removeTask(i) {
            this.tasks.splice(i, 1);
        }
    }
});

app.mount("#root");
