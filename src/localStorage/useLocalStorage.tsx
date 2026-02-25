import { useState } from "react";

/**
 * Custom hook để lưu trữ và đồng bộ state với localStorage của trình duyệt.
 * * @template T - Kiểu dữ liệu của giá trị cần lưu (ví dụ: string, boolean, object...)
 * @param {string} key - Tên chìa khóa (nhãn) dùng để lưu vào localStorage.
 * @param {T} initialValue - Giá trị mặc định nếu trong localStorage chưa có gì.
 * @returns {[T, Function]} - Trả về một mảng y hệt useState: [giá_trị_hiện_tại, hàm_cập_nhật].
 * * @example
 * const [theme, setTheme] = useLocalStorage<string>('app_theme', 'dark');
 */

export function useLocalStorage<T>(key:string, initialValue: T)
{
    const [storedValue,setStoredValue] = useState<T>(()=>{
        try{
            const item = window.localStorage.getItem(key);
            return item ?JSON.parse(item):initialValue;
        }
        catch (error) {
            return initialValue;
        }   
    });
    const setValue = (value:T | ((val:T)=>T))=> {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
        catch(error){
            console.log("Error when save", error);
        }
    };
    return [storedValue, setValue] as const;
}