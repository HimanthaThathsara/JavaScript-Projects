const standardTheme = document.querySelector(".standard-theme");
const lightTheme = document.querySelector(".light-theme");
const darkerTheme = document.querySelector(".darker-theme");

standardTheme.addEventListener("click", () => changeTheme("standard"));
lightTheme.addEventListener("click", () => changeTheme("light"));
darkerTheme.addEventListener("click", () => changeTheme("darker"));

function changeTheme(color) {
  localStorage.setItem("savedTheme", color);
  savedTheme = localStorage.getItem("savedTheme");

  document.body.className = color;

  color === "darker"
    ? document.getElementById("title").classList.add("darker-title")
    : document.getElementById("title").classList.remove("darker-title");
}

document.querySelector("#show-task").addEventListener("click", () => {
  document.querySelector(".popup").classList.add("active");
  document.querySelector(".blur").classList.add("done");
});

document.querySelector(".close-btn").addEventListener("click", () => {
  document.querySelector(".popup").classList.remove("active");
  document.querySelector(".blur").classList.remove("done");
});

document.getElementById("add_task").addEventListener("click", () => {
  const taskMessage = document.getElementById("task_input").value;
  const taskDate = document.getElementById("date_input").value;
  const taskTime = document.getElementById("time_input").value;

  if (taskMessage && taskDate && taskTime) {
    const taskArea = document.getElementById("task-area");

    const taskItem = document.createElement("div");
    taskItem.className = "task-item";

    taskItem.innerHTML = `
          <div class="description">
              <div class="date-time">
                  <div class="date">
                      <div class="icon">
                          <i class="bi bi-calendar2-week"></i>
                      </div>
                      ${taskDate}
                  </div>
                  <div class="time">
                      <div class="icon">
                          <i class="bi bi-stopwatch"></i>
                      </div>
                      ${taskTime}
                  </div>
              </div>
              <span class="task-message"><i class="bi bi-circle" id="message-icon"></i> ${taskMessage}</span>
          </div>
          <div class="options">
              <i class="bi bi-three-dots" ondblclick="delete_task()"></i>
          </div>
      `;

    taskArea.appendChild(taskItem);

    document.getElementById("task_input").value = "";
    document.getElementById("date_input").value = "";
    document.getElementById("time_input").value = "";
  } else {
    alert("Can't Add The Task Because Task is Empty");
  }
  saveData();
  document.querySelector(".popup").classList.remove("active");
  document.querySelector(".blur").classList.remove("done");
});

function delete_task() {
  document.querySelector(".time").classList.add("done");
  document.querySelector(".date").classList.add("done");
  document.querySelector(".task-message").classList.add("done");
  saveData();
}

const task_area = document.querySelector(".task-area");

function saveData() {
  localStorage.setItem("data", task_area.innerHTML);
}

function ShowSaveData() {
  task_area.innerHTML = localStorage.getItem("data");
}

ShowSaveData();
