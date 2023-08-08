import { ADD_HABIT, REMOVE_HABIT, UPDATE_HABIT } from "../actions";

const initialState = {
  habits: [
    {
      name: "javascript",
      id: 1,
      weeklyReport: [
        { status: "notDone" },
        { status: "notDone" },
        { status: "notDone" },
        { status: "notDone" },
        { status: "notDone" },
        { status: "notDone" },
        { status: "notDone" },
      ],
    },
  ],
};

function habits(state = initialState, action) {
  switch (action.type) {
    case ADD_HABIT:
      return {
        ...state,
        habits: [...state.habits, action.habit],
      };

    case REMOVE_HABIT:
      const removedList = state.habits.filter(
        (habit) => habit.id !== action.habit.id
      );
      return {
        ...state,
        habits: removedList,
      };

    case UPDATE_HABIT:
      const newupdatedList = state.habits.map((habit) => {
        if (action.data.habit.id === habit.id) {
          habit.weeklyReport.map((weekDay, index) => {
            if (index === action.data.index) {
              console.log("found");
              weekDay.status = action.data.status;
            }
          });
        }

        return habit;
      });
      return {
        ...state,
        habits: [...newupdatedList],
      };
    default:
      return state;
  }
}

export default habits;
