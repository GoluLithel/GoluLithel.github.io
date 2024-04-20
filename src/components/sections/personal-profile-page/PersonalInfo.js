import { Box } from '@mui/material';

export default function PersonalInfo() {
    const profileData = [
        ['Name', 'Bhogendra Kamble'],
        ['Date of Birth', '22 September 1996'],
        ['Marital Status', 'Married'],
        ['Known Languages', 'English, Marathi, Hindi'],
        ['Nationality', 'Indian'],
        ['Hobbies', 'Chess, Cooking']
    ];

    return (
        <Box style={{ display: 'grid', placeItems: 'center center', height: 'calc(100vmin - 55vmin)' }}>
            <Box sx={{ fontSize: '1.2rem' }}>
                <table>
                    <tbody>
                        {profileData.map((data, index) => (
                            <tr key={index}>
                            <td><strong>{data[0]}:</strong></td>
                            <td> </td>
                            <td>{data[1]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Box>
        </Box>
    );
}