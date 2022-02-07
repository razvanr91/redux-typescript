import React, { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const RepositoriesList: React.FC = () => {
	const { searchRepositories } = useActions();
	const [term, setTerm] = useState("");
	const { data, error, loading } = useTypedSelector((state) => state.repositories);

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
