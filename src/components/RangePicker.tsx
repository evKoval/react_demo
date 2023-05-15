import {JSX} from "react";
import dayjs, {Dayjs} from "dayjs";
import {DatePicker} from "antd";

const onRangeChange = (dates: null | (Dayjs | null)[], dateStrings: string[]) => {
    if (dates) {
        console.log('From: ', dates[0], ', to: ', dates[1]);
        console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
    } else {
        console.log('Clear');
    }
};

const rangePresets: {
    label: string;
    value: [Dayjs, Dayjs];
}[] = [
    {label: 'Год', value: [dayjs().add(-1, 'year'), dayjs()]},
    {label: 'Месяц', value: [dayjs().add(-1, 'month'), dayjs()]},
    {label: 'Неделя', value: [dayjs().add(-1, 'week'), dayjs()]},
    {label: 'День', value: [dayjs().add(-1, 'd'), dayjs()]},
];

export const RangePicker = (): JSX.Element => {
    return (
        <DatePicker.RangePicker
            presets={rangePresets}
            showTime
            size={"small"}
            format="HH:mm:ss DD.MM.YYYY"
            onChange={onRangeChange}
        />
    )
}