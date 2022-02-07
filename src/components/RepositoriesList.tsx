import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../hooks/useActions";
import { actionCreators } from "../state";

const RepositoriesList: React.FC = () => {
	const { searchRepositories } = useActions();
	const [term, setTerm] = useState("");
	const { data, error, loading } = useSelector((state: any) => state.repositories);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTerm(e.target.value);
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		searchRepositories(term);
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
