document.getElementById("btnRead").onclick = function () {
  // input
  // dom tới thẻ input lấy giá trị số nguyên
  var a = document.getElementById("so").value * 1;
  // xử lý:
  // tách ra số hàng đơn vị, hàng chục, hàng trăm của số nguyên, làm tròn số
  // nếu số nguyên đó <100 hoặc >999 thì k hợp lệ(1)
  // nếu đủ đk thì hiển thị ra giá trị hàng đơn vị, hàng chục, hàng trăm và nối chuỗi(2)
  var soHangDonVi = Math.floor((a % 100) % 10);
  var soHangChuc = Math.floor((a % 100) / 10);
  var soHangTram = Math.floor(a / 100);
  if (a < 100 || a > 999) {
    // đầu ra cho th (1)
    var hienThi = "<div class='alert alert-success'>";
    hienThi += "<p>không tồn tại số này nha nhập lại đi</p>";
    document.getElementById("sauKhiRead").innerHTML = hienThi;
  } else {
    // đầu ra th (2)
    var hienThi = "<div class='alert alert-success'>";
    hienThi +=
      "<p>số bạn nhập là:</p> " + soHangTram + soHangChuc + soHangDonVi;
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
