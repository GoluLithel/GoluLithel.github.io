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
        <table style={{ fontSize: '1.2rem' }}>
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
    );
}