import { useMemo } from "react";
import { Pie, PieChart, Tooltip, Legend } from "recharts";
import { Data, getColumn, HEADERS } from "../../scripts/data";
import { RechartsDataType } from "../../types";

export default function VoteDistribution(props: { data: Data }) {
	const voteDistribution = useMemo((): RechartsDataType[] => {
		const votes: RechartsDataType[] = [];
		for (let i = 7; i < HEADERS.length; i++) {
			votes.push({
				name: HEADERS[i],
				value: getColumn(props.data, i).reduce(
					(p, c) => p + (Number(c) || 0),
					0
				),
			});
		}
		return votes;
	}, [props.data]);

	return (
		<PieChart width={400} height={400}>
			<Pie
				data={voteDistribution}
				dataKey="value"
				nameKey="name"
				cx="50%"
				cy="50%"
				outerRadius={50}
				fill="#8884d8"
			/>
			<Legend />
			<Tooltip />
		</PieChart>
	);
}
