let money = +prompt("Nhập vào số tiền cần gửi (VNĐ)");
let month = +prompt("Nhập vào số tháng bạn gửi (1-12)");
let price = money*((4.3/100)/12)*month;
alert("Lãi suất khi bạn gửi số tiền: "+money+" trong "+month+" là : " +price+" VNĐ")