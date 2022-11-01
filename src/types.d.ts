export interface PieData {
	name: string;
	value: number;
	fill?: string;
}

export interface BarData {
	name: string;
	uv: number;
	pv?: number;
}

export type Data = string[][];
export type DataComponentProps = { data: Data };
