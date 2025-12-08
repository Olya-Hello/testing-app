import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
    let navigate = useNavigate();

    const handleSumbit = (event: FormEvent) => {
        event.preventDefault();
        navigate('/student');
    }
    return (
        <form onSubmit={e => handleSumbit(e)}>
            <div>LoginPage</div>
        </form>
    )
}