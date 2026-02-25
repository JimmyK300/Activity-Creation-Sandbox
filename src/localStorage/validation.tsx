/**
 * Kiểm tra xem một trường dữ liệu (field) có bị bỏ trống hay không.
 * Hỗ trợ kiểm tra null, undefined, chuỗi rỗng và mảng rỗng.
 */
export const validateRequired = (value: unknown): boolean => {
    // Ngăn chặn trường hợp chưa nhập gì hoặc biến chưa tạo
    if (value === null || value ===undefined) return false;

    // Ngăn chặn trường hợp gõ toàn space
    if (typeof value === 'string' && value.trim() === '') return false;

    // Xử lý riêng cho các input dạng chọn nhiều (checkbox), mảng phải có ít nhất 1 phần tử
    if (Array.isArray(value) && value.length === 0) return false;

    return true;
}