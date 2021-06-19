import api from '.'

const baseURL = '/subjects'

const StudentApi = {
  create(payload) {
    return api.post(baseURL, payload);
  },
  listSubjects() {
    return api.get(baseURL);
  }
} 

export default StudentApi;