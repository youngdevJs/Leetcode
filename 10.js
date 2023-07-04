function isMatch(s, p) {
    // Hàm đệ quy để kiểm tra khớp biểu thức chính quy
    function match(i, j) {
      // Trường hợp cơ bản: nếu đến cuối chuỗi và mẫu, hoặc đã kiểm tra hết cả hai
      if (j === p.length) {
        return i === s.length;
      }
  
      // Kiểm tra xem có khớp ký tự hiện tại hay không
      const currentMatch =
        i < s.length && (s[i] === p[j] || p[j] === '.');
  
      // Nếu sau dấu '*' là 1 hoặc nhiều ký tự, có thể khớp 0, 1 hoặc nhiều lần
      if (j + 1 < p.length && p[j + 1] === '*') {
        return (
          match(i, j + 2) || // Khớp 0 lần
          (currentMatch && match(i + 1, j)) // Khớp 1 hoặc nhiều lần
        );
      }
  
      // Nếu sau dấu '*' không phải là ký tự hoặc '.', chỉ cần kiểm tra khớp ký tự hiện tại
      return currentMatch && match(i + 1, j + 1);
    }    
  
    return match(0, 0);
  }

  console.log(isMatch("aaabb","a*.b"));