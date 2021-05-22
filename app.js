const App = {
  data() {
    return {
      title: 'Список заметок',
      myPlaceholder: 'Введите заметку',
      notes: ['Лечь спать', 'Пойти покушать'],
      myInputValue: ''
    }
  },
  methods: {
    addNewNote () {
      this.notes.push(this.myInputValue)
      this.myInputValue = ''
      console.log(this.notes)
    },
    deleteNote (i) {
      this.notes.splice(i, 1)
    }
  }
}

Vue.createApp(App).mount('#app');