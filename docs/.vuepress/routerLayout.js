// 自动获取guide文件夹中的md文件并注入到路由中
const fs = require("fs");
const path = require("path");

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

function getMdFile(dir, arr, excludeDir) {
  const filePath = dir.substr(2);
  if (excludeDir != null) {
    var excludeFilePath = excludeDir.substr(2);
  }
  const fsList = fs.readdirSync(resolve(dir));
  fsList.forEach((item) => {
    if (/.*(\.md)$/.test(item)) {
      // 是md文件
      let fileName = item.split(".")[0];
      if (fileName === "README") {
        if (filePath == "/guide") {
          arr.unshift(filePath + "/");
        } else {
          arr.push(filePath + "/");
        }
      // 排除不包含在内的文件夾
      } else if (excludeDir != null && excludeFilePath != null && excludeFilePath != filePath){
        arr.push(filePath + "/" + fileName); 
      } else if (excludeDir == null) {
        arr.push(filePath + "/" + fileName);
      }
    } else {
      // 不是md文件
      var stat = fs.lstatSync(resolve(dir + "/" + item));
      var is_direc = stat.isDirectory(); // true || false 判断是不是文件夹
      if (is_direc) {
        getMdFile(dir + "/" + item, arr, excludeDir);
      }
    }
  });
}

function done(dir, type, excludeDir) {
  let arr = []
  getMdFile(dir, arr, excludeDir);
  return arr
}

module.exports = done;
