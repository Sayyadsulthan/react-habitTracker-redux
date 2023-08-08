import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeHabit, updateHabit } from "../actions";
import { toast } from "react-toastify";

function getWeekDay(index) {
  const arr = [
    "sunday",
    "monday",
    "tuesday",
    "wednasday",
    "thursday",
    "friday",
    "saturday",
  ];

  return arr[index];
}

class Dashboard extends React.Component {
  handleUpdate = (e, index, habit) => {
    console.log("handleUpdate", this.props);
    const status = e.target.value;
    console.log("handleUpdate", e.target.value);
    console.log("handleUpdate index", index);
    console.log("handleUpdate habit", habit);
    this.props.dispatch(updateHabit(habit, index, status));
    toast.success("habit updated successfully...");
    // this.props.dispatch(addHabit(habit));
    // this.props.dispatch(handelAddHabit(habit.name))
    // this.props.dispatch(removeHabit(habit));
    // const { habits } = this.props;
    // this.props.dispatch(addHabit(habits));
  };

  handleRemoveHabit = (habit) => {
    console.log("handle remove habit", habit);
    this.props.dispatch(removeHabit(habit));
    toast.success("habit remover successfully..");
  };
  render() {
    const { habits } = this.props;
    return (
      <>
        <div className="dashboard-wrapper">
          <h1>Dashboard</h1>

          <div className="dashboard-container">
            {/* map method of habits > habit */}
            {
                habits.length<1 && <h1>Oops !! you need to create habit First</h1>
            }

            {habits.map((habit) => (
              <div className="dashboard-body">
                <div className="dashboard-left">
                  <span> {habit.name}</span>
                </div>
                <div className="dashboard-center">
                  {/* map method of habit > status */}
                  {habit.weeklyReport.map((val, index) => (
                    <div className="status">
                      <div>{getWeekDay(index)}</div>
                      <select
                        defaultValue={val.status}
                        onChange={(e) => this.handleUpdate(e, index, habit)}
                      >
                        <option value="done">done</option>
                        <option value="notDone">notDone</option>
                        <option value="none">none</option>
                      </select>
                    </div>
                  ))}
                </div>
                <div className="dashboard-right">
                  <button onClick={() => this.handleRemoveHabit(habit)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
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

const connectedAppComponent = connect(mapStateToProps)(Dashboard);

export default connectedAppComponent;
