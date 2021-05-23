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
      if (this.myInputValue) {
        this.notes.push(this.myInputValue)
        this.myInputValue = ''
      } else {
        return
      }
    },
    deleteNote (i) {
      this.notes.splice(i, 1)
    }
  }
}

Vue.createApp(App).mount('#app');