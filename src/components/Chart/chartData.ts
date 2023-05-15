const calc = (x: number): number => 2 + Math.sin(x) + (x % 10) * Math.random()
export const generateData = (total = 101): Dot[] => {
    const data: Dot[] = [];
    for (let i = 0; i < total; i++) {
        data.push({yValue: calc(i)})
    }
    return data;
}
export const generateDataInPosition = (position: number): Dot =>
    ({yValue: calc(position)})


export type Dot = { yValue: number }