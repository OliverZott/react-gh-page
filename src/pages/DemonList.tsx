import { Component } from "react";

class DemonList extends Component {
    constructor(props: any) {
        super(props);
        this.state = {
            boxArray: Array(20),
        };
    }

    render() {
        const items: any[] = [];
        const items2: any[] = [];
        const outerArray: any[] = [];

        for (let i = 0; i <= 20; i++) {
            items.push(<th>{i}</th>);
        }

        for (let i = 0; i <= 20; i++) {
            items2.push(
                <td>
                    <input className="form-check-input" type="checkbox" />
                </td>
            );
        }

        for (let i = 0; i <= 10; i++) {
            outerArray.push(
                <tr>
                    {items2}
                    <td>
                        <input type="text" />
                    </td>
                </tr>
            );
        }

        return (
            <div>
                <h1>Here are demons</h1>
                <br />
                <br />
                <table className="table ">
                    <thead className="thead-dark">
                        <tr>
                            {items}
                            <th>sum</th>
                        </tr>
                    </thead>
                    <tbody>{outerArray}</tbody>
                </table>
            </div>
        );
    }
}

export default DemonList;
