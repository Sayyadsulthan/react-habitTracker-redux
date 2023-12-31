import React from "react";
import { connect } from "react-redux";
import { handelAddHabit, removeHabit, updateHabit } from "../actions";

import { toast } from "react-toastify";

let count = 0;
const date = new Date();
function getWeekDay(data) {
  const arr = [
    "sunday",
    "monday",
    "tuesday",
    "wednasday",
    "thursday",
    "friday",
    "saturday",
  ];

  return arr[date.getDay(data)];
}

const DD = date.getDate();
const MM = date.getMonth() + 1;
const YY = date.getFullYear();

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }

  handelAddHabitToData = () => {
    if (this.state.value <= 1) {
      toast.error("please enter the habit name");
      return;
    } else {
      const habitName = this.state.value;
      this.props.dispatch(handelAddHabit(habitName, count));
      toast.success("habit ceated successfull..");
    }
  };
  handleUpdate = (e, index, habit) => {
    const status = e.target.value;
    this.props.dispatch(updateHabit(habit, index, status));
    toast.success("habit updated successfully...");
  };

  handleRemoveHabit = (habit) => {
    this.props.dispatch(removeHabit(habit));
    toast.success("habit remover successfully..");
  };
  render() {
    const { habits } = this.props;

    return (
      <>
        <div className="home-wrapper">
          <div className="create-habit-container">
            <input
              type="text"
              value={this.state.value}
              onChange={(e) => this.setState({ value: e.target.value })}
            />
            <button onClick={this.handelAddHabitToData}>addHabit</button>
          </div>
          {habits.length < 1 && <h1>Oops !! you need to create habit First</h1>}
          {habits.map((habit) => {
            count++;
            const currentDayStatus =
              habit.weeklyReport[date.getDay(YY + "-" + MM + "-" + DD)];

            return (
              <div key={habit.id} className="habit-body">
                <div className="habit-details">
                  <span>{habit.name}</span>
                  <span>{getWeekDay(YY + "-" + MM + "-" + DD)}</span>
                  {console.log(habit)}
                  <select
                    onChange={(e) =>
                      this.handleUpdate(
                        e,
                        date.getDay(YY + "-" + MM + "-" + DD),
                        habit
                      )
                    }
                    defaultValue={
                      currentDayStatus.status === "done"
                        ? "done"
                        : currentDayStatus.status === "notDone"
                        ? "notDone"
                        : "none"
                    }
                  >
                    <option value="done">done</option>
                    <option value="notDone">notDone</option>
                    <option value="none">none</option>
                  </select>
                </div>
                <div className="remove-habit-container">
                  <button onClick={() => this.handleRemoveHabit(habit)}>
                    delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
function mapStateToProps(state) {
  return {
    habits: state.habits,
  };
}

const connectedAppComponent = connect(mapStateToProps)(Home);

export default connectedAppComponent;
