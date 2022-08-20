import { useCallback, useState } from "react";

function useInputs<T>(initialForm : T) {
    const [form, setForm] = useState<T>(initialForm);

    const onChange = useCallback((e: any) => {
        const { name, value } = e.target;
        console.log(name, value);
        setForm(form => ({
            ...form,
            [name]: value,
        }));
    }, []);

    return {form, onChange};
}

export default useInputs;