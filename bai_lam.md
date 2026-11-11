# BÀI LÀM – HACKATHON 02

- **Mã đề:** 07
- **Họ tên:** Lê Quốc Minh Quân
- **Lớp:** CNTT2
- **Link repository:** KS26-CNTT2-NhapMon-CNTT-Hackathon02
- **Hệ điều hành (Windows/macOS):** Window

## 4.2. Thao tác máy tính cơ bản bằng CLI

### Các lệnh đã chạy

```shell
cd
pwd
ls
ls -force
mkdir
cp
rm 
cd ..
 Get-ChildItem -Recurse -Force

```

### Kết quả liệt kê toàn bộ dự án (Windows: Get-ChildItem -Recurse -Force; macOS: ls -aR)

```text

    Directory: C:\starter-kit (1)\starter-kit\spa-website


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        11/11/2026   1:42 PM                back
d-----        11/11/2026   1:36 PM                data
d-----        11/11/2026   1:42 PM                docs
d-----        11/11/2026   1:35 PM                evidence
d-----        11/11/2026   1:36 PM                logs
d-----        11/11/2026   1:31 PM                web
------         11/3/2026   7:07 AM             75 .env
-a----         11/3/2026   7:07 AM           2412 bai_lam.md


    Directory: C:\starter-kit (1)\starter-kit\spa-website\back


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         11/3/2026   7:07 AM           6149 hoa_don_spa_thang_7.xlsx


    Directory: C:\starter-kit (1)\starter-kit\spa-website\data


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         11/3/2026   7:07 AM           6149 hoa_don_spa_thang_7.xlsx


    Directory: C:\starter-kit (1)\starter-kit\spa-website\docs


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         11/3/2026   7:07 AM            149 lich_lam_viec.txt


    Directory: C:\starter-kit (1)\starter-kit\spa-website\logs


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         11/3/2026   7:07 AM            939 service.log


    Directory: C:\starter-kit (1)\starter-kit\spa-website\web


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        11/11/2026   1:31 PM                images
------         11/3/2026   7:07 AM            597 app.js
------         11/3/2026   7:07 AM            523 index.html
------         11/3/2026   7:07 AM            460 style.css


    Directory: C:\starter-kit (1)\starter-kit\spa-website\web\images


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
------         11/3/2026   7:07 AM           3091 logo-lotuscare.png

```

## 4.3. Lọc log truy cập website

### a) Lệnh lọc các dòng status=500

```shell
 select-string "status=500" .\logs\service.log

```

### 2 dòng đầu tiên trong logs/loi_500.txt

```text
logs\service.log:4:2026-07-28 08:12:50 POST /api/dat-lich status=500
logs\service.log:7:2026-07-28 08:19:23 POST /api/dat-lich status=500

```

### b) Lệnh đếm số dòng status=404 và kết quả

```shell
(Get-Content .\logs\service.log | Select-String "status=404").count

```

```text
4

```

## 4.4. Chạy script tong_hop (.ps1 hoặc .sh)

### Lệnh chạy (Windows: nếu dùng Phụ lục 2 thì ghi cả 2 lệnh)

```shell

PS C:\starter-kit (1)\starter-kit\spa-website> @'
>> # Script: tong_hop.ps1
>> # Tac gia: Lê Quốc Minh Quân
>> # Ngay tao : 11/11/2026
>> Write-Host "Dang tao bao cao..."
>> "===BAO CAO SU CO WEBSITE ===" > logs/tong_hop.txt
>> Get-Content .\logs\service.log | Select-String "status=404" >> logs/tong_hop.txt
>>  Get-Content .\logs\service.log | Select-String "status=500" | Measure-Object >>  logs/tong_hop.txt
>> Write-Host "Hoan Thanh!"
>> '@ | Set-Content tong_hop.ps1
 set-executionpolicy -scope process -executionpolicy bypass
 .\tong_hop.ps1

```

### Nội dung file logs/tong_hop.txt

```text
===BAO CAO SU CO WEBSITE ===

2026-07-28 08:16:12 GET /images/phong-spa-3.jpg status=404
2026-07-28 08:39:18 GET /uu-dai-cu status=404
2026-07-28 08:46:40 GET /tin-tuc status=404
2026-07-28 08:48:51 GET /tin-tuc status=404




Count    : 6
Average  :
Sum      :
Maximum  :
Minimum  :
Property :


```

## 4.5. README.md và bảo vệ thông tin bí mật

> README.md, .gitignore và .env.example được chấm trực tiếp trên file ở gốc dự án. Đánh dấu `[x]` vào các mục đã làm để tự kiểm tra.

- [x] README.md: Heading 1, mô tả có **in đậm** và *in nghiêng*, bảng, code block, task list, blockquote
- [x] .gitignore có dòng `.env` (tên file đúng, không có đuôi .txt)
- [x] .env.example có đủ tên biến, giá trị để trống (tên file đúng, không có đuôi .txt)

## 4.6. Kiểm tra trang web bằng DevTools (F12) và báo cáo lỗi

### Bảng lỗi

| STT | Tab DevTools phát hiện lỗi | Tên file hoặc thông báo lỗi | Cách khắc phục |
| --- | --- | --- | --- |
| 1 |phát hiên không hiện được logo  |GET file:///C:/starter-kit%20(1)/starter-kit/spa-website/web/images/logo.png net::ERR_FILE_NOT_FOUND  |img src="images/logo-lotuscare.png" alt="Logo" class="logo">  |
| 2 |không hiện được bảng giá Spa  |Uncaught ReferenceError: hienThiGoiDichVu is not defined  |vào app.js thay đổi dong số 18 từ hienThiGoiDichVu thành hienThiGoiSpa và F5 lại  |

> Ảnh chụp màn hình lưu trong thư mục `evidence/` (network.png, console.png).

### Báo cáo lỗi gửi trưởng nhóm

- **Context:** Vào website và không thấy logo và bảng giá spa, dùng F12 và F5 để load lại thì thấy 2 thông báo lỗi, đang sử dụng hệ điều hành windown
- **Expected:** sửa được lỗi logo và bảng giá để xem được nội dung theo đúng kê khai 
- **Actual:** logo vẫn trống trơn và bảng giá chỉ xuất hiện tiêu đề và chưa biết cách sửa 
- **Log:** GET file:///C:/starter-kit%20(1)/starter-kit/spa-website/web/images/logo.png net::ERR_FILE_NOT_FOUND
- Uncaught ReferenceError: hienThiGoiDichVu is not defined 

### Câu tìm kiếm Google

```
site:Stackoverflow.com "Uncaught ReferenceError: hienThiGoiDichVu is not defined" -quangcao -crack

```

## 4.7. Excel

> Phần Excel được chấm trực tiếp trên file `data/hoa_don_spa_thang_7.xlsx`, không cần ghi vào đây.
