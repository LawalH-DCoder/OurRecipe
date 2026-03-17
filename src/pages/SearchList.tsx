import { useSearchParams } from "react-router-dom";
import SearchList from "../component/searchList";

function SearchListPage() {
    const [searchParams] = useSearchParams();
    const term = searchParams.get("term") ?? "";

    return (
        <section >
            <SearchList initialTerm={term} />
        </section>
    );
}

export default SearchListPage;
