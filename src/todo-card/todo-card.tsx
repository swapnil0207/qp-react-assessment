import { Col, Container, Row } from "react-bootstrap";
import "./todo-card.css";
import { BsHourglassSplit } from "react-icons/bs";
import { MdDoneOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { updateStatus } from "../reducers/todoSlice";

const TodoCard = ({ data }: any) => {
	const dispatch = useDispatch<AppDispatch>();

	return (
		<div>
			<Container fluid className="my-2">
				<Row xs={12}>
					<Col className={`todo-card ${data?.status ? "done" : ""}`}>
						<Container className="m-1">
							<Row xs={12}>
								<Col xs={12} md={8} lg={10}>
									<Row xs={12}>
										<Col xs={"auto"}>
											<input
												type="checkbox"
												checked={data?.status}
												onChange={(e) => {
													console.log(e?.target?.checked, data);
													dispatch(
														updateStatus({
															...data,
															status: e?.target?.checked,
														})
													);
												}}
											/>
										</Col>
										<Col xs>{data?.title}</Col>
									</Row>
								</Col>
								<Col className="d-flex justify-content-end">
									<Container fluid>
										<Row>
											<Col
												xs
												className={`text-center ${
													data?.status === false
														? "mark-as-pending-button"
														: "mark-as-done-button"
												}`}
											>
												{data?.status === false ? (
													<>
														<BsHourglassSplit className="card-icon" /> To Do
													</>
												) : (
													<>
														<MdDoneOutline className="card-icon" /> Done
													</>
												)}
											</Col>
										</Row>
									</Container>
								</Col>
							</Row>
							<Row xs={12}>
								<Col>{data?.description}</Col>
							</Row>

							{/* <img
								src={FireWork}
								height={"100%"}
								width={"100%"}
								style={{ position: "absolute", top: 0, left: 0 }}
								alt="firework"
							></img> */}
						</Container>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default TodoCard;
