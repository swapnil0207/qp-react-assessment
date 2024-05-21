import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { addNewTask } from "../reducers/todoSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { useState } from "react";
import Form from "react-bootstrap/Form";

const AddPopUp = ({ show, handleClose, id }: any) => {
	const dispatch = useDispatch<AppDispatch>();
	const [data, setData] = useState<any>({ title: "", description: "" });
	return (
		<Modal
			show={show}
			onHide={() => {
				setData({
					title: "",
					description: "",
				});
				handleClose();
			}}
		>
			<Modal.Header closeButton>
				<Modal.Title>Add ToDo</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form.Control
					placeholder="Title"
					value={data?.title}
					onChange={(e) => {
						setData({ title: e.target.value, description: data?.description });
					}}
				/>
				<br />
				<Form.Control
					as={"textarea"}
					placeholder="Description"
					value={data?.description}
					onChange={(e) => {
						setData({ title: data?.title, description: e.target.value });
					}}
				/>
			</Modal.Body>
			<Modal.Footer>
				<Button
					variant="secondary"
					onClick={() => {
						setData({ title: "", description: "" });
						handleClose();
					}}
				>
					Close
				</Button>
				<Button
					variant="primary"
					onClick={() => {
						dispatch(
							addNewTask({
								status: false,
								id: id,
								title: data?.title,
								description: data?.description,
							})
						);
						setData({ title: "", description: "" });
						handleClose();
					}}
				>
					Save Changes
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default AddPopUp;
