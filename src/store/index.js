import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:4567',
})
apiClient.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(new Error(error.response ? error.response.data.reason : error.message))
)

const skeleton = {
  schedule () {
    return {id: -1, name: '', at: '', wday: [], speech_text: '', frequency: 60, once_only: false}
  }
}

const state = {
  skeleton,
  editingSchedule: skeleton.schedule(),
  scheduleCollection: [],
  errorMessage: 'もう一度試してみてください'
}

const getters = {
  getSortedScheduleCollection (state) {
    return state.scheduleCollection.sort((scheduleA, scheduleB) => {
      if (scheduleA.at === scheduleB.at) return 0
      const date = '1970/01/01'
      return new Date(`${date} ${scheduleA.at}`) > new Date(`${date} ${scheduleB.at}`) ? 1 : -1
    })
  },
  getSortedScheduleCollectionLast (state, getters) {
    const scheduleCount = getters.getSortedScheduleCollection.length
    return scheduleCount !== 0
      ? getters.getSortedScheduleCollection[scheduleCount - 1]
      : state.skeleton.schedule()
  },
  editingScheduleIsNew (state) {
    return state.editingSchedule.id === -1
  },
}

const mutations = {
  updateScheduleCollection (state, scheduleCollection) {
    state.scheduleCollection = scheduleCollection
  },
  changeEditSchedule(state, schedule) {
    state.editingSchedule = schedule
  },
  createSchedule (state, schedule) {
    state.scheduleCollection.push(schedule)
  },
  updateSchedule (state, schedule) {
    let origin = state.scheduleCollection.find(origin => {
      return origin.id === schedule.id
    })
    Object.keys(origin).forEach(function (key) {
      this[key] = schedule[key]
    }, origin)
  },
  removeSchedule (state, schedule) {
    const idx = state.scheduleCollection.findIndex(origin => {
      return origin.id === schedule.id
    })
    state.scheduleCollection.splice(idx, 1)
  },
  updateErrorMessage (state, errorMessage) {
    state.errorMessage = errorMessage
  }
}

const actions = {
  speechNow (context, text) {
    return new Promise((resolve, reject) => {
      apiClient.post('/api/v1/speech', {speech_text: text})
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          context.commit('updateErrorMessage', error.message)
          reject(error)
        })
    })
  },
  editSchedule (context, schedule) {
    context.commit('changeEditSchedule', JSON.parse(JSON.stringify(schedule)))
  },
  editScheduleById (context, { id }) {
    context.state.scheduleCollection.find(schedule => {
    })
  },
  fetchScheduleCollection (context) {
    return new Promise((resolve, reject) => {
      apiClient.get('/api/v1/speech/schedules')
        .then(response => {
          context.commit('updateScheduleCollection', response.data)
          resolve(response)
        })
        .catch(error => {
          context.commit('updateErrorMessage', error.message)
          reject(error)
        })
    })
  },
  createSchedule (context, schedule) {
    let payload = JSON.parse(JSON.stringify(schedule))
    delete payload.id
    return new Promise((resolve, reject) => {
      apiClient.post('/api/v1/speech/schedules', payload)
        .then(response => {
          context.commit('createSchedule', response.data)
          resolve(response)
        })
        .catch(error => {
          context.commit('updateErrorMessage', error.message)
          reject(error)
        })
    })
  },
  updateSchedule (context, schedule) {
    return new Promise((resolve, reject) => {
      apiClient
        .put(`/api/v1/speech/schedules/${schedule.id}`, schedule)
        .then(response => {
          context.commit('updateSchedule', JSON.parse(JSON.stringify(schedule)))
          resolve(response)
        })
        .catch(error => {
          context.commit('updateErrorMessage', error.message)
          reject(error)
        })
    })
  },
  removeSchedule (context, schedule) {
    return new Promise((resolve, reject) => {
      apiClient.delete(`/api/v1/speech/schedules/${schedule.id}`)
        .then(response => {
          context.commit('removeSchedule', schedule)
          resolve(response)
        })
        .catch(error => {
          context.commit('updateErrorMessage', error.message)
          reject(error)
        })
      })
  }
}

Vue.use(Vuex)
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
