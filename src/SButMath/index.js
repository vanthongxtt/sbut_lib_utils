SButMath = module.exports;

SButMath.random = function() {
    // Tạo số ngẫu nhiên. (Trung bình:0, độ lệch chuẩn: 1)
    var v1, v2, s;

    do {
        v1 = 2 * Math.random() - 1;   // -1.0 ~ 1.0 
        v2 = 2 * Math.random() - 1;   // -1.0 ~ 1.0 
        s = v1 * v1 + v2 * v2;
    } while (s >= 1 || s == 0);

    s = Math.sqrt( (-2 * Math.log(s)) / s );
    return v1 * s;
}


SButMath.shape = function(mat) {
    // tạo mảng chứa độ dài của chuỗi lúc bắt đầu và kết thúc 
    var row = mat.length; 
    var col = mat[0].length;
    return [row,col];
};

SButMath.addMat = function (mat1, mat2) {
    //tách từng [hần từ của 2 mảng cha tạo thành các mảng con a+b với chiều dài mảng bằng với mảng cha ban đầu
    if ((mat1.length === mat2.length) && (mat1[0].length === mat2[0].length)) {
        var result = new Array(mat1.length);
        for (var i = 0; i < mat1.length; i++) {
            result[i] = new Array(mat1[i].length);
            for (var j = 0; j < mat1[i].length; j++) {
                result[i][j] = mat1[i][j] + mat2[i][j];
            }
        }
        return result;
    } else {
        throw new Error('Matrix mismatch.');
    }
};

SButMath.transpose = function (mat) {
    // tách từng phần tử trong mảng thành mảng con
    var result = new Array(mat[0].length);
    for (var i = 0; i < mat[0].length; i++) {
        result[i] = new Array(mat.length);
        for (var j = 0; j < mat.length; j++) {
            result[i][j] = mat[j][i];
        }
    }
    return result;
};

SButMath.zeroVec = function(n) {
    // đổi phần tử trong mảng thành số 0
    var vec = [];
    while(vec.length < n)
        vec.push(0);
    return vec;
};
