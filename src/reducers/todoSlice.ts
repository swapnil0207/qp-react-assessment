import { createSlice } from "@reduxjs/toolkit";

export interface toDoData {
	id: number;
	status: boolean;
	title: string;
	description: string;
}

interface toDoState {
	toDoList: toDoData[] | [];
}

const initialState: toDoState = {
	toDoList: [],
};

function binarySearch(arr: any, id: number) {
	let start = 0;
	let end = arr.length - 1;

	while (start <= end) {
		let mid = Math.floor((start + end) / 2);

		if (arr[mid].id === id) {
			return mid; // Return the index where id is found
		} else if (arr[mid].id < id) {
			start = mid + 1; // Continue searching in the right half
		} else {
			end = mid - 1; // Continue searching in the left half
		}
	}

	return -1; // Return -1 if id is not found
}

const toDoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addNewTask(state, actions) {
			state.toDoList = [...state.toDoList, actions.payload];
		},
		addPreFilledTask(state) {
			const tempToDoList = [];
			for (let i = 0; i < 9999; i++) {
				tempToDoList[i] = {
					status: false,
					id: i,
					title: "updated data",
					description: "desc data " + i,
				};
			}
			state.toDoList = tempToDoList;
		},
		updateStatus(state, actions) {
			const index = binarySearch(state.toDoList, actions.payload?.id);

			if (index !== -1) {
				state.toDoList[index].status = actions.payload.status;
			}
			// state.toDoList = state?.toDoList?.map((data) =>
			// 	data?.id === actions?.payload?.id
			// 		? {
			// 				...actions?.payload,
			// 		  }
			// 		: data
			// );
		},
	},
});

export const { updateStatus, addNewTask, addPreFilledTask } = toDoSlice.actions;
export default toDoSlice.reducer;
