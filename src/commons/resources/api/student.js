import api from '.'

const baseURL = '/students'

const StudentApi = {
  create(payload) {
    return api.post(baseURL, payload);
  },
  getUserByEmail(email) {
    return api.get(`${baseURL}/find?email=${email}`)
  },
  listStudents() {
    return api.get(baseURL);
  },
  assignToASubject(student, subject, grade) {
    const query = `${baseURL}/${student}/subject/${subject}`;
    const body = {
      grade: Number(grade)
    }
    return api.post(query, body);
  }
} 

export default StudentApi;
