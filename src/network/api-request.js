import axios from "axios";

export async function login(email, password) {
  try {
    const response = await axios.post(`http://localhost:8081/api/v1/login`, {
      email: email,
      password: password,
    });
    return response.data;
  } catch (error) {
    console.log("Login error message :", error.messages);
    return error;
  }
}

export async function usersCreate(name, email, role, division, password) {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.post(
      `http://18.136.195.232/api/v1/user/new`,
      {
        name: name,
        email: email,
        role: role,
        division: division,
        password: password,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
}

export async function getAllUsers() {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(`http://18.136.195.232/api/v1/user`, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function deleteUsers(id) {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.delete(
      `http://18.136.195.232/api/v1/user/${id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    this.getAllUsers();
    console.log(response);
  } catch (error) {
    return error;
  }
}

export async function updateUsers(id, name, email, role, division, password) {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.put(
      `http://18.136.195.232/api/v1/user/update/${id}`,
      {
        name: name,
        email: email,
        role: role,
        division: division,
        password: password,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    console.log(response);
  } catch (error) {
    return error;
  }
}

export async function getAllActivity(begin_date, end_date, user_id) {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(
      `http://18.136.195.232/api/v1/activity/allByMonth?begin_date=${begin_date}&end_date=${end_date}&user_id=${user_id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function getActivityDetails(date, user_id) {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(
      `http://18.136.195.232/api/v1/activity?date=${date}&user_id=${user_id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function activityCreate(activity, time, date) {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.post(
      `http://18.136.195.232/api/v1/activity/new`,
      {
        activity: activity,
        time: time,
        date: date,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
}

export async function deleteActivity(id) {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.delete(
      `http://18.136.195.232/api/v1/activity/delete/${id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function verifyActivity(date, user_id) {
  console.log("CEK DATE & USER ID:", date, typeof user_id);
  const token = localStorage.getItem("token");
  try {
    const response = await axios.post(
      `http://18.136.195.232/api/v1/activity/verify`,
      {
        date: date,
        user_id: user_id,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return response.data;
  } catch (error) {
    return error;
  }
}
