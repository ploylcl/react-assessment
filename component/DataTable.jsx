
export default function DataTable(props) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>LastName</td>
                        <td>Position</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody >
                    <tr> {props.key}
                        <td>{props.name}</td>
                        <td>{props.lastname}</td>
                        <td>{props.position}</td>
                        <td>
                            <button 
                            onClick={() => props.deleteData(props.id)}
                            
                            >Delete</button>
                        </td>
                    </tr>
                </tbody>



            </table>
        </div>
    )
}