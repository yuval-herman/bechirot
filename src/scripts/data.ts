import { Data } from "../types";

export const HEADERS = [
	"סמל ועדה",
	"שם ישוב",
	"סמל ישוב",
	"בעלי זכות בחירה",
	"מצביעים",
	"פסולים",
	"כשרים",
	"אמת",
	"אצ",
	"ב",
	"ג",
	"ד",
	"ום",
	"ז",
	"זך",
	"זנ",
	"זץ",
	"ט",
	"י",
	"יז",
	"ינ",
	"יץ",
	"יק",
	"כן",
	"ך",
	"ל",
	"מחל",
	"מרצ",
	"נז",
	"ני",
	"נף",
	"נץ",
	"נק",
	"נר",
	"עם",
	"פה",
	"ף",
	"צ",
	"ץ",
	"ק",
	"קי",
	"קך",
	"קנ",
	"קץ",
	"רז",
	"שס",
	"ת",
];

export function getColumn(data: Data, row: number): string[] {
	return data.map((line) => line[row]);
}

export function canVoteNumber(data: Data): number {
	return getColumn(data, 3)
		.map((i) => Number(i) || 0)
		.reduce((p, c) => p + c);
}

export function voted(data: Data): number {
	return getColumn(data, 4)
		.map((i) => Number(i) || 0)
		.reduce((p, c) => p + c);
}
