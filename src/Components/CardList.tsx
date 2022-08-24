import * as React from "react";
import { IRobot } from "../Container/App";
import Card from "./Card";

const CardList = ({ robots }: { robots: Array<IRobot> }): JSX.Element => {
    return (
        <div>
            {robots.map((user, i) => (
                <Card
                    key={i}
                    id={robots[i].id}
                    name={robots[i].name}
                    email={robots[i].email}
                />
            ))}
        </div>
    );
};

export default CardList;
