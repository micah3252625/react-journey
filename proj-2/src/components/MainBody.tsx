import Entry from "./Entry";
import data from "../data";

const MainBody: React.FC = () => {
    const entries = data.map((entry) => (
        <Entry key={entry.id} entries={entry} />
    ));

    return <section className="entries-container">{entries}</section>;
};

export default MainBody;
