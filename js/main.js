// bài1
document.getElementById("btnLich").onclick = function () {
  // input:dom tới các thẻ input lấy gtri ngày tháng năm
  var ngay = document.getElementById("ngay").value * 1;
  var thang = document.getElementById("thang").value * 1;
  var nam = document.getElementById("nam").value * 1;
  var ngayHomTruoc = ngay - 1;
  var thangTruoc = thang - 1;
  var namTruoc = nam - 1;
  var ngayHomSau = ngay + 1;
  var thangSau = thang + 1;
  var namSau = nam + 1;

  if (ngay == 0) {
    var lich = "<div class='alert alert-success'>";
    lich +=
      "<p>ngày cần tìm là ngày cuối của tháng </p>" + (thang == thangTruoc);
    lich += "</div>";
    document.getElementById("Lich").innerHTML = lich;
  } else if ((thang = 0)) {
    var lich = "<div class='alert alert-success'>";
    lich +=
      "<p>ngày cần tìm là ngày cuối của tháng </p>" +
      (thang == 12 && nam == namTruoc);
    lich += "</div>";
    document.getElementById("Lich").innerHTML = lich;
  } else if (
    thang == 1 ||
    thang == 3 ||
    thang == 5 ||
    thang == 7 ||
    thang == 8 ||
    thang == 10 ||
    thang == 12
  ) {
    var lich = "<div class='alert alert-success'>";
    lich += "<p>ngày hôm trước là: </p>" + (ngayHomTruoc == 31);
    lich += "</div>";
    document.getElementById("Lich").innerHTML = lich;
  } else if (thang == 4 || thang == 6 || thang == 9 || thang == 11) {
    var lich = "<div class='alert alert-success'>";
    lich += "<p>ngày hôm trước là: </p>" + (ngayHomTruoc == 30);
    lich += "</div>";
    document.getElementById("Lich").innerHTML = lich;
  } else if (thang == 2 && nam % 4 == 0) {
    var lich = "<div class='alert alert-success'>";
    lich += "<p>ngày hôm trước là:</p>" + (ngayHomTruoc == 29);
    lich += "</div>";
    document.getElementById("Lich").innerHTML = lich;
  } else if (thang == 2 && nam % 4 != 0) {
    var lich = "<div class='alert alert-success'>";
    lich += "<p>ngày hôm trước là: </p>" + (ngayHomTruoc == 28);
    lich += "</div>";
    document.getElementById("Lich").innerHTML = lich;
  } else {
    var lich = "<div class='alert alert-success'>";
    lich += "<p>k có ngày này</p>";
    lich += "</div>";
    document.getElementById("Lich").innerHTML = lich;
  }
  //  lười quá hok nghĩ nữa :v
};

// xử lý
//  Ngày hôm trước là ngày giảm 1 đơn vị.
// Nếu giảm ngày dẫn đến ngày không hợp lệ (bằng 0) thì ngày hôm trước chính là ngày cuối cùng của tháng trước. Vậy giảm tháng 1 đơn vị.
// Nếu giảm tháng dẫn đến tháng không hợp lệ (bằng 0) thì ngày hôm trước chính là ngày cuối cùng của năm trước. Vậy tháng là 12 và giảm năm 1 đơn vị.
// Khi đã xác định được tháng và năm cụ thể thì ngày chính là số ngày tối đa của tháng thuộc năm đó.
// Cách tính ngày hôm sau của một ngày thực hiện như sau:

// Ngày hôm sau chính ngày tăng 1 đơn vị.
// Nếu tăng ngày dẫn đến ngày không hợp lệ (lớn hơn số ngày tối đa của tháng thuộc năm đó) thì ngày hôm sau chính là ngày đầu tiên của tháng sau. Vậy ngày bằng 1 và tăng tháng 1 đơn vị.
// Nếu tăng tháng dẫn đến tháng không hợp lệ (lớn hơn 12) thì ngày hôm sau chính là ngày đầu tiên của tháng đầu thuộc năm sau. Vậy tháng là 1 và tăng năm 1 đơn vị.
//

// bài 3
document.getElementById("btnRead").onclick = function () {
  // input
  // dom tới thẻ input lấy giá trị số nguyên
  var a = document.getElementById("so").value * 1;
  // xử lý:
  // tách ra số hàng đơn vị, hàng chục, hàng trăm của số nguyên, làm tròn số
  // nếu số nguyên đó <100 hoặc >999 thì k hợp lệ(1)
  // nếu đủ đk thì hiển thị ra giá trị hàng đơn vị, hàng chục, hàng trăm và nối chuỗi(2)
  var soHangTram = Math.floor((a % 100) % 10);
  var soHangChuc = Math.floor((a % 100) / 10);
  var soHangDonVi = Math.floor(a / 100);
  if (a < 100 || a > 999) {
    // đầu ra cho th (1)
    var hienThi = "<div class='alert alert-success'>";
    hienThi += "<p>không tồn tại số này nha nhập lại đi</p>";
    document.getElementById("sauKhiRead").innerHTML = hienThi;
  } else {
    // đầu ra th (2)
    var hienThi = "<div class='alert alert-success'>";
    hienThi +=
      "<p>số bạn nhập là:</p> " + soHangDonVi + soHangChuc + soHangTram;
    document.getElementById("sauKhiRead").innerHTML = hienThi;
  }
};

// bài 2
//input
// dom tới 2 thẻ input để lấy giá trị tháng năm
document.getElementById("btnCalendar").onclick = function () {
  var month = document.getElementById("month").value * 1;
  var year = document.getElementById("year").value * 1;
  // xử lý:
  // tháng <1 hoặc >12 = k hợp lệ rồi xét tiếp
  // nếu tháng là tháng 1 3 5 7 8 10 12 thì có 31 ngày,
  // các tháng còn lại - tháng 2 thì có 30 ngày
  // xét trường hợp nếu là tháng 2 mà vào năm nhuận thì có 29 ngày
  // nếu là tháng 2 k trong năm nhuận thì có 28 ngày
  // công thức tính năm nhuận là năm chia hết cho 4

  if (month < 1 || month > 12) {
    // đầu ra nếu nhập sai tháng
    var show = "<div class='alert alert-success'>";
    show += "<p>k có tháng này nha nhập lại đi</p>";
    show += "</div>";
    document.getElementById("calendar").innerHTML = show;
  } else if (
    month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 10 ||
    month == 12
  ) {
    // đầu ra cho các tháng 1 3 5 7 8 10 12
    var show = "<div class='alert alert-success'>";
    show += "<p>tháng này có 31 ngày nha</p>";
    show += "</div>";
    document.getElementById("calendar").innerHTML = show;
  } else if (month == 4 || month == 6 || month == 9 || month == 11) {
    // đầu ra cho các tháng 4 6 9 11
    var show = "<div class='alert alert-success'>";
    show += "<p>tháng này có 30 ngày nha</p>";
    show += "</div>";
    document.getElementById("calendar").innerHTML = show;
  } else if (month == 2 && year % 4 == 0) {
    // đầu ra cho tháng 2 năm nhuận
    var show = "<div class='alert alert-success'>";
    show += "<p>tháng này có 29 ngày nha</p>";
    show += "</div>";
    document.getElementById("calendar").innerHTML = show;
  } else if (month == 2 && year % 4 != 0) {
    // đầu ra cho tháng 2 năm k nhuận
    var show = "<div class='alert alert-success'>";
    show += "<p>tháng này có 28 ngày nha</p>";
    show += "</div>";
    document.getElementById("calendar").innerHTML = show;
  } else {
    // đầu ra nếu nhập sai
    var show = "<div class='alert alert-success'>";
    show += "<p>Không có tháng này nha nhập lại tháng khác đi</p>";
    show += "</div>";
    document.getElementById("calendar").innerHTML = show;
  }
};
// bài 4
// input:
// dom tới các thẻ input lấy các giá trị  ...
document.getElementById("btnLocation").onclick = function () {
  var ten1 = document.getElementById("name1").value;
  var X1 = document.getElementById("locationX1").value * 1;
  var Y1 = document.getElementById("locationY1").value * 1;
  var ten2 = document.getElementById("name2").value;
  var X2 = document.getElementById("locationX2").value * 1;
  var Y2 = document.getElementById("locationY2").value * 1;
  var ten3 = document.getElementById("name3").value;
  var X3 = document.getElementById("locationX3").value * 1;
  var Y3 = document.getElementById("locationY3").value * 1;
  var locationXTruong = document.getElementById("locationXTruong").value * 1;
  var locationYTruong = document.getElementById("locationYTruong").value * 1;

  // CT tính tọa độ : căn bậc 2 của ((x1-x2)^2 +(y2-y1))^2
  var fromTruongToStudent1 = Math.sqrt(
    (locationXTruong - X1) ^ (2 + (locationYTruong - Y1)) ^ 2
  );
  var fromTruongToStudent2 = Math.sqrt(
    (locationXTruong - X2) ^ (2 + (locationYTruong - Y2)) ^ 2
  );
  var fromTruongToStudent3 = Math.sqrt(
    (locationXTruong - X3) ^ (2 + (locationYTruong - Y3)) ^ 2
  );
  // sau đó nếu tọa độ sv 1> tọa độ sv 2 > sv 3 thì xa nhất, tương tự với các th khác là sv 2 > 1 && sv 2>3, sv 3>1 && sv 3>2
  if (
    fromTruongToStudent1 > fromTruongToStudent2 &&
    fromTruongToStudent1 > fromTruongToStudent3
  ) {
    var location = "<div class='alert alert-success'>";
    location += "<p>Đây là sinh viên xa trường nhất:</p>" + ten1;
    location += "</div>";
    document.getElementById("location").innerHTML = location;
  } else if (
    fromTruongToStudent2 > fromTruongToStudent1 &&
    fromTruongToStudent2 > fromTruongToStudent3
  ) {
    var location = "<div class='alert alert-success'>";
    location += "<p>Đây là sinh viên xa trường nhất:</p>" + ten2;
    location += "</div>";
    document.getElementById("location").innerHTML = location;
  } else if (
    fromTruongToStudent3 > fromTruongToStudent1 &&
    fromTruongToStudent3 > fromTruongToStudent2
  ) {
    var location = "<div class='alert alert-success'>";
    location += "<p>Đây là sinh viên xa trường nhất:</p>" + ten3;
    location += "</div>";
    document.getElementById("location").innerHTML = location;
  } else {
    var location = "<div class='alert alert-success'>";
    location += "<p>Tọa độ k tồn tại nha</p>" + ten3;
    location += "</div>";
    document.getElementById("location").innerHTML = location;
  }
};
