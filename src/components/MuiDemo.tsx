import {Autocomplete, Box, Button, ButtonGroup, Slider, Stack, TextField} from "@mui/material";
import React from "react";
import {darken, lighten, styled} from "@mui/system";
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

export const MuiDemo = () => {

    const [value, setValue] = React.useState<number>(30);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number);
    };

    const options = top100Films.map((option) => {
        const firstLetter = option.title[0].toUpperCase();
        return {
            firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
            ...option,
        };
    });

    return <div style={{width: "800px", display: "block"}}>
        <h2 style={{marginBottom: "30px"}}>Material UI Components
            <a className="external-link" href={"https://mui.com/x/react-data-grid/"}>все компоненты</a>
        </h2>

        <div style={{display: "grid", gap: "40px"}}>
        <Box sx={{ width: 200 }}>
        <Autocomplete
            id="grouped-demo"
            options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
            groupBy={(option) => option.firstLetter}
            getOptionLabel={(option) => option.title}
            sx={{width: 300}}
            renderInput={(params) => <TextField {...params} label="With categories"/>}
            renderGroup={(params) => (
                <li key={params.key}>
                    <GroupHeader>{params.group}</GroupHeader>
                    <GroupItems>{params.children}</GroupItems>
                </li>
            )}
        />
        </Box>
        <Box sx={{ width: 200 }}>
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                <VolumeDown />
                <Slider aria-label="Volume" value={value} onChange={handleChange} />
                <VolumeUp />
            </Stack>
            <Slider disabled defaultValue={30} aria-label="Disabled slider" />
        </Box>
        <Box>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
        </Box>
        </div>
    </div>
}

const GroupHeader = styled('div')(({theme}) => ({
    position: 'sticky',
    top: '-8px',
    padding: '4px 10px',
    color: theme.palette.primary.main,
    backgroundColor:
        theme.palette.mode === 'light'
            ? lighten(theme.palette.primary.light, 0.85)
            : darken(theme.palette.primary.main, 0.8),
}));
const GroupItems = styled('ul')({
    padding: 0,
});

const top100Films = [
    {title: 'The Shawshank Redemption', year: 1994},
    {title: 'The Godfather', year: 1972},
    {title: 'The Godfather: Part II', year: 1974},
    {title: 'The Dark Knight', year: 2008},
    {title: '12 Angry Men', year: 1957},
    {title: "Schindler's List", year: 1993},
    {title: 'Pulp Fiction', year: 1994}];