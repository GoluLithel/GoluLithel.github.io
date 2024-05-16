import { profileInfo } from "../../../data/personalInfo";

export default function PersonalInfo() {
    return (
        <table style={{ fontSize: '1.2rem' }}>
            <tbody>
                {profileInfo.map((data, index) => (
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