import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus } from "lucide-react";
const InputBar = () => {
    return (
        <section className="py-10 items-center justify-center flex">
            <div className="flex w-full max-w-xl space-x-2">
                <Input
                    type="text"
                    placeholder="e.g. Oregano, Onions"
                    className="w-96 h-10"
                />
                <Button
                    type="submit"
                    className="h-10"
                >
                    <Plus className="w-4 h-4" /> Add Ingredient
                </Button>
            </div>
        </section>
    );
};
export default InputBar