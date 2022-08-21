import { useCallback, useState } from "react";

function useInputs<T>(initialForm : T) {
    const [form, setForm] = useState<T>(initialForm);

    const onChange = useCallback((e: any) => {
        const { name, value } = e.target;
        setForm(form => ({
            ...form,
            [name]: value,
        }));
    }, []);

    return {form, setForm, onChange};
}

export default useInputs;