import { useLocalStorage } from "./useLocalStorage";
import React, {createContext, useContext} from "react";


/**
 * Custom hook quản lý trạng thái đăng nhập giả lập (Mock Auth).
 * Tích hợp sẵn useLocalStorage để đảm bảo phiên đăng nhập không bị mất khi người dùng F5 (refresh) trang.
 * * @returns {Object} Object chứa các thuộc tính và phương thức:
 * - `isAuthenticated` {boolean}: Cờ xác định trạng thái đăng nhập (true = đã đăng nhập).
 * - `login` {Function}: Hàm gọi để chuyển sang trạng thái đã đăng nhập.
 * - `logout` {Function}: Hàm gọi để đăng xuất (xóa phiên).
 * * @example
 * const { isAuthenticated, login, logout } = useAuth();
 */
interface AuthContextType {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}


const AuthContext = createContext<AuthContextType | null>(null);
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Lưu cờ đăng nhập vào localStorage với chìa khóa 'is_logged_in', mặc định ban đầu là false
    const [isAuthenticated, setIsAuthenticated] = useLocalStorage<boolean>('is_logged_in', false);


    // Các hàm helper bọc lại logic set state cho gọn gàng, dễ gọi ở các component khác
    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);
   
    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}