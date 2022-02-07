import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../state";

const RepositoriesList: React.FC = () => {
	const dispatch = useDispatch();
	const [term, setTerm] = useState("");

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTerm(e.target.value);
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		dispatch(actionCreators.searchRepositories(term));
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input value={term} onChange={onChange} />
				<button>Search</button>
			</form>
		</div>
	);
};

export default RepositoriesList;
