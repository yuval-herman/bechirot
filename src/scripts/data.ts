import { Data } from "../types";

export const HEADERS = [
	"סמל ועדה",
	"שם ישוב",
	"סמל ישוב",
	"בעלי זכות בחירה", //בעלי זכות בחירה
	"מצביעים",
	"פסולים",
	"כשרים",
	"אמת",
	"ב",
	"ג",
	"ודעם",
	"ז",
	"זץ",
	"ט",
	"י",
	"יז",
	"ינ",
	"יף",
	"יק",
	"יר",
	"כ",
	"כך",
	"כן",
	"ל",
	"מחל",
	"מרצ",
	"נ",
	"ני",
	"נר",
	"עם",
	"פה",
	"ףז",
	"צי",
	"צכ",
	"צף",
	"ץ",
	"ק",
	"קי",
	"קך",
	"קץ",
	"ר",
	"רנ",
	"רף",
	"רק",
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
