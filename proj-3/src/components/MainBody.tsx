import InputBar from "@/components/InputBar"


const MainBody = () => {

    const ingredients = [];
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }
    return (
        <main className="flex items-center justify-center my-4 ">
            <form onSubmit={handleSubmit} className="w-1/2 border rounded-sm shadow-sm">
                <InputBar />
            </form>
        </main>
    )
}

export default MainBody