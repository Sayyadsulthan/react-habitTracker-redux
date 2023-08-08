// ACTION TYPES
export const ADD_HABIT = "ADD_HABIT";
export const REMOVE_HABIT = "REMOVE_HABIT";
export const UPDATE_HABIT = "UPDATE_HABIT";

// ACTION CREATORS:
export function handelAddHabit(habitName, count) {
  const habit = {
    name: habitName,
    id: count + 1,
    weeklyReport: [
      { status: "notDone" },
      { status: "notDone" },
      { status: "notDone" },
      { status: "notDone" },
      { status: "notDone" },
      { status: "notDone" },
      { status: "notDone" },
    ],
  };
  return function (dispatch) {
    dispatch(addHabit(habit));
  };
}

// ACTION CREATORS:
export function addHabit(habit) {
  return {
    type: ADD_HABIT,
    habit,
  };
}

export function removeHabit(habit) {
  return {
    type: REMOVE_HABIT,
    habit,
  };
}

export function updateHabit(habit, index, status) {
  return {
    type: UPDATE_HABIT,
    data: { habit, index, status },
  };
}
