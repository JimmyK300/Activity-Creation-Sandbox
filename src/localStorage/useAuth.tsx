import { useLocalStorage } from "./useLocalStorage";

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

export function useAuth()
{
    // Lưu cờ đăng nhập vào localStorage với chìa khóa 'is_logged_in', mặc định ban đầu là false
    const [isAuthenticated, setIsAuthenticated] = useLocalStorage<boolean>('is_logged_in', false);

    // Các hàm helper bọc lại logic set state cho gọn gàng, dễ gọi ở các component khác
    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);
    
    return{
        isAuthenticated,
        login, 
        logout
    };
}