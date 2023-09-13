export default function UserTable(props) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Last Name</td>
                        <td>Position</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.name}</td>
                        <td>{props.lastname}</td>
                        <td>{props.position}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
