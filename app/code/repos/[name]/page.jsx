import Repo from "@/app/components/repo";

const RepoPage = ({ params: { name } }) => {
	return (
		<div className="card">
			<Repo name={name} />
		</div>
	);
};

export default RepoPage;
