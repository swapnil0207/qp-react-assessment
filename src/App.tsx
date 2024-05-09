import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { KPI } from "./kpi";
import { ToDoCard } from "./todo-card";

function App() {
	return (
		<Container className="my-4">
			<KPI />
			<hr />
			<Container>
				<Row className="justify-content-between">
					<Col xs={8}>
						<Button variant="primary" className="w-100" onClick={() => {}}>
							Add New Task
						</Button>
					</Col>
					<Col xs={4}>
						<Button variant="primary" className="w-100" onClick={() => {}}>
							Pre-Fill Task
						</Button>
					</Col>
				</Row>
			</Container>

			<hr />
			<Container className="mt-4">
				<Row>
					<Col>
						<ToDoCard data={{ status: true, title: "Dummy Data" }} />
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default App;
