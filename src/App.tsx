import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { KPI } from "./kpi";
import { ToDoCard } from "./todo-card";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { toDoData } from "./reducers/todoSlice";
import { useEffect, useState } from "react";
import { AddPopUp } from "./add-pop-up";

function App() {
	const toDoStore = useSelector((state: RootState) => state.toDoList);

	const [todoList, setTodoList] = useState<toDoData[]>([]);

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	useEffect(() => {
		setTodoList(toDoStore);
	}, [toDoStore]);

	return (
		<Container className="my-4">
			<KPI
				totalTask={todoList?.length}
				inProgressTask={
					todoList?.filter((data) => data?.status === false)?.length
				}
				completedTask={
					todoList?.filter((data) => data?.status === true)?.length
				}
			/>
			<hr />
			<Container>
				<Row className="justify-content-between">
					<Col>
						<Button
							variant="primary"
							className="w-100"
							onClick={() => {
								handleShow();
							}}
						>
							Add New Task
						</Button>
					</Col>
				</Row>
			</Container>
			<AddPopUp show={show} handleClose={handleClose} id={todoList?.length} />
			<hr />
			<Container className="mt-4">
				<Row>
					{todoList?.map((data, index) => (
						<Col xs={12} key={index}>
							<ToDoCard data={data} />
						</Col>
					))}
				</Row>
			</Container>
		</Container>
	);
}

export default App;
