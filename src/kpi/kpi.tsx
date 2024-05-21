import { Card, Col, Container, Row } from "react-bootstrap";
import "./kpi.css";
import { GrInProgress } from "react-icons/gr";
import { MdDoneAll } from "react-icons/md";
import { FaTasks } from "react-icons/fa";

const KPI = ({ totalTask, inProgressTask, completedTask }: any) => {
	return (
		<Container>
			<Row>
				<Col md={12} lg className="kpi-card">
					<Card bg="primary" text="white">
						<Card.Body>
							<Card.Title className="d-flex justify-content-between">
								Total Task <FaTasks />
							</Card.Title>
							<div className="justify-content-end d-flex h2">
								<b>{totalTask}</b>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col md={12} lg className="kpi-card">
					<Card bg="warning" text="white">
						<Card.Body>
							<Card.Title className="d-flex justify-content-between">
								In Progress <GrInProgress />
							</Card.Title>
							<div className="justify-content-end d-flex h2">
								<b>{inProgressTask}</b>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col md={12} lg className="kpi-card">
					<Card bg="success" text="white">
						<Card.Body>
							<Card.Title className="d-flex justify-content-between">
								Completed <MdDoneAll />
							</Card.Title>
							<div className="justify-content-end d-flex h2">
								<b>{completedTask}</b>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default KPI;
