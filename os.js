const os = require("os")

if(os.type()==="Android"){
os.exec("adb shell reboot -p")
}