/*
Descrizione:
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni item una "x": cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
*/

const app = new Vue({
    el: '#root',
    data: {
        addTextTodo: '',
        todos: [
            {
                text: 'Fare la spesa',
                done: false
            },
            {
                text: 'Acquistare un nuovo libro',
                done: true
            },
            {
                text: 'Lavare la macchina',
                done: false
            },
            {
                text: 'Suonare il piano',
                done: false
            },
            {
                text: 'Andare al cinema',
                done: true
            }
        ]
    },
    methods: {
        deleteTodo(positionTodo) {
            const arrComplete = [];
            const arrFirstPart = this.todos.slice(0, positionTodo);
            const arrSecondPart = this.todos.slice(positionTodo + 1);
            arrComplete.push(...arrFirstPart, ...arrSecondPart);
            this.todos = arrComplete;
        },
        addTodo() {
            let condition = false;
            const newText = this.addTextTodo.trim().charAt(0).toUpperCase() +
                this.addTextTodo.trim().slice(1);

            this.todos.forEach(element => {
                if(element.text === newText){
                    condition = true;
                    this.addTextTodo = "";
                }
            });

            if (newText.length > 0 && !condition) {
                const newTodo = {
                    text: newText,
                    done: false
                }
                this.todos.push(newTodo);
                this.addTextTodo = "";
            }
        },
        changeDone(positionTodo) {
            this.todos[positionTodo].done = !this.todos[positionTodo].done;
        }
    }
})