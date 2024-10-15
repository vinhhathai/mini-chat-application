function generateOtp() {
  const timestamp = Date.now().toString();
  const randomNum = Math.floor(Math.random() * 90000) + 10000;
  const otp = timestamp.slice(-5) + randomNum.toString();
  return otp.slice(-5);
}
module.exports = {
  generateOtp: generateOtp
};