import { createApp } from 'vue'
import App from './App.vue'

import CommentForm from './components/CommentForm.vue'
import Comment from './components/Comment.vue'
import PersonalProfile from './components/PersonalProfile.vue'

const app = createApp(App)

app.component('comment-form', CommentForm)
app.component('comment', Comment)
app.component('personal-profile', PersonalProfile)
app.mount('#app')


